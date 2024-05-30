import { DateTime } from "luxon";
import { CalendarEvent, CalendarEventType } from "../dayEvents";

export interface CalculatedDayType {
  isDisabled?: boolean;
  isOverride?: boolean;
  events?: CalendarEventType[];
  date: Date;
}

export class CalculatedDay {
  static create(data: CalculatedDayType): CalculatedDay {
    return new CalculatedDay(data);
  }

  private _isDisabled: boolean;
  private _isOverride: boolean;
  private _events?: CalendarEvent[];
  private _date: Date;

  constructor(data: CalculatedDayType) {
    this._isDisabled = !!data.isDisabled;
    this._isOverride = !!data.isOverride;
    this._events = data.events?.map((e) => CalendarEvent.create(e));
    this._date = new Date(data.date);
  }

  get isDisabled(): boolean {
    return this._isDisabled;
  }
  get isOverride(): boolean {
    return this._isOverride;
  }
  get events(): CalendarEvent[] {
    return this._events ?? [];
  }
  get date(): Date {
    return this._date;
  }
  get totalMinutes(): number {
    return this.events.reduce((prev, e) => prev + e.duration, 0);
  }

  isDateBooked(date: Date, booked: { startTime: Date; endTime: Date }[]) {
    return !!booked?.find((tb) => {
      tb.startTime.setUTCSeconds(0);
      tb.endTime.setUTCSeconds(0);
      date.setUTCSeconds(0);
      return (
        tb.startTime.getTime() <= date.getTime() &&
        tb.endTime.getTime() >= date.getTime()
      );
    });
  }

  splitEventToSlots(
    event: CalendarEvent,
    minutes = 30,
    booked: { startTime: Date; endTime: Date }[]
  ) {
    const startDate = new Date(this._date);
    startDate.setHours(event.startTimeAsDate!.getHours());
    startDate.setMinutes(event.startTimeAsDate!.getMinutes());

    const endDate = new Date(this._date);
    endDate.setHours(event.endTimeAsDate!.getHours());
    endDate.setMinutes(event.endTimeAsDate!.getMinutes());

    const events: {
      startDate: DateTime;
      startTime: string;
      endTime: string;
    }[] = [];

    let current = DateTime.fromJSDate(startDate);

    while (current.toMillis() < endDate.getTime()) {
      if (this.isDateBooked(current.toJSDate(), booked)) {
        current = current.plus({ minutes });
        continue;
      }

      let startTime = current.toFormat("hh:mm a");
      current = current.plus({ minutes });
      let endTime = current.toFormat("hh:mm a");

      events.push({ startDate: current, startTime, endTime });
    }

    return events;
  }

  /**
   *
   * @param minutesCount Default value is [30 minutes]
   */
  eventsDividedIntoSlotsOfMinutes(
    booked: { startTime: Date; endTime: Date }[],
    minutesCount = 30
  ) {
    const slots: { startDate: DateTime; startTime: string; endTime: string }[] =
      [];
    const todayDate = DateTime.fromJSDate(this._date).set({
      second: 0,
      minute: 0,
    });
    this.events.forEach((event) => {
      slots.push(
        ...this.splitEventToSlots(
          event,
          minutesCount,
          booked.filter((b) => {
            const booked = DateTime.fromJSDate(b.startTime).set({
              second: 0,
              millisecond: 0,
            });
            return booked.hasSame(todayDate.plus({ minutes: 30 }), "day");
          })
        )
      );
    });
    const now = Date.now();

    const twoHoursLater = new Date(now + 2 * 60 * 60 * 1000);
    const thirtyMinutesLater = new Date(now + 30 * 60 * 1000);

    return slots.filter(
      (s) =>
        s.startDate.toJSDate().getTime() >
        new Date(thirtyMinutesLater).getTime()
    );
  }

  toJson = (): CalculatedDayType => ({
    events: this.events.map((e) => e.toJson()),
    isDisabled: this.isDisabled,
    isOverride: this.isOverride,
    date: this.date,
  });
}

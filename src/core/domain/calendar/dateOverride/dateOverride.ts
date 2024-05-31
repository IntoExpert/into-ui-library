import {
  DayName,
  getDayNameByDate,
  setDateAtMidnight,
} from "../../../../components/countdown/dateTime";
import {
  CalendarDayEvents,
  CalendarDayEventsType,
  CalendarEvent,
} from "../dayEvents";
import { DateTime } from "luxon";

export interface DateOverrideType {
  daysEvents: CalendarDayEventsType[];
  defaultDaysEvents: CalendarDayEventsType[];
}

export class DateOverride {
  static create(data?: DateOverrideType): DateOverride {
    return new DateOverride(
      data ?? {
        daysEvents: [],
        defaultDaysEvents: [],
      }
    );
  }
  private _daysEvents: CalendarDayEvents[];
  private _defaultDaysEvents: CalendarDayEvents[];

  constructor(data: DateOverrideType) {
    this._daysEvents = data.daysEvents.map((d) => new CalendarDayEvents(d));
    this._defaultDaysEvents = data.defaultDaysEvents.map(
      (d) => new CalendarDayEvents(d)
    );

    this.sort();
  }

  get validDateOverrides(): CalendarDayEvents[] {
    return this._daysEvents.filter((d) => {
      return !this._defaultDaysEvents
        .find((defaultDay) => d.name === defaultDay.name)
        ?.isEqual(d);
    });
  }

  getOrCreateDateOverride = (date: Date): CalendarDayEvents => {
    setDateAtMidnight(date);
    const day = this.getDayByDate(date);

    if (day) return day;
    const dayName = getDayNameByDate(date, "en", "short")
      .toLowerCase()
      .slice(0, 2) as DayName;
    const defaultDay = this.getWeeklyScheduledDayByName(dayName);
    const newDay = new CalendarDayEvents({
      isAvailable: false,
      name: dayName,
      date: DateTime.fromJSDate(date),
      events: defaultDay?.events?.map((e) => {
        return e.copy().toJson();
      }),
    });

    this._daysEvents.push(newDay);
    this.sort();

    return newDay;
  };

  getDayByDate(date: Date): CalendarDayEvents | undefined {
    setDateAtMidnight(date);
    return this._daysEvents.find((day) =>
      day.date
        ?.set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
        .equals(DateTime.fromJSDate(date))
    );
  }

  setDefaultDates = (days: CalendarDayEvents[]) => {
    this._defaultDaysEvents = days;
  };

  removeEvent = (event: CalendarEvent, date: Date) => {
    const day = this.getOrCreateDateOverride(date);
    day?.removeEvent(event);
  };

  addEmptyEvent = (date: Date) => {
    const day = this.getOrCreateDateOverride(date);

    day.addEmptyEvent();
    return day;
  };

  updateEvent = (date: Date, event: CalendarEvent) => {
    const day = this.getOrCreateDateOverride(date);
    day?.updateEvent(event);
  };

  sort = () => {
    this._daysEvents.sort(
      (a, b) => (a.date?.toMillis() ?? 0) - (b.date?.toMillis() ?? 0)
    );
  };

  getDateOverrides = (date: Date): CalendarEvent[] | undefined => {
    const midnightDate = setDateAtMidnight(date);
    const day = this.getDayByDate(midnightDate);

    if (!day) return undefined;

    if (this.getWeeklyScheduledDayByName(day?.name)?.isEqual(day)) {
      return undefined;
    }

    return day.validEvents;
  };

  getWeeklyScheduledDayByName = (
    name: DayName
  ): CalendarDayEvents | undefined =>
    this._defaultDaysEvents.find((day) => day.name === name);

  resetDate = (date: Date) => {
    const day = this.getDayByDate(date);
    if (!day) return;

    this._daysEvents = this._daysEvents.filter((d) => !d.date?.equals(d.date));
  };

  resetAllDaysOfWeekIndex = (dayWeekIndex: number) => {
    this._daysEvents = this._daysEvents.filter(
      (d) => d.date?.day !== dayWeekIndex
    );
  };

  toJson = (): DateOverrideType => {
    return {
      daysEvents: this._daysEvents.map((d) => d.toJson()),
      defaultDaysEvents: this._defaultDaysEvents.map((d) => d.toJson()),
    };
  };
}

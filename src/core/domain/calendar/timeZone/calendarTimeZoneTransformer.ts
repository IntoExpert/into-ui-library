import { DateTime, IANAZone } from "luxon";
import { Calendar } from "../calendar";
import {
  CalendarDayEvents,
  CalendarDayEventsType,
  CalendarEvent,
  CalendarEventType,
} from "../dayEvents";
import {
  DayName,
  getDayNameByDate,
} from "../../../../components/countdown/dateTime";

export class CalendarTimeZoneTransformer {
  protected _calendar: Calendar;
  protected _originalTimezone: string;

  constructor(calendar: Calendar, timezone?: string) {
    this._calendar = calendar;
    if (!timezone || !IANAZone.isValidZone(timezone))
      throw new Error(`Timezone ${timezone} is not valid`);

    this._originalTimezone = timezone;
  }

  transformTo(timezone: string) {
    if (this._originalTimezone === timezone) return this._calendar;

    const allDaysEvents = this._transformWeekdays(timezone);
    const newWeekDaysGenerated =
      this._generateNewWeekDaysFromOrderedEvents(allDaysEvents);
    const newDateOverrideEvents = this._transformDateOverrides(
      this._calendar.dateOverrides.validDateOverrides,
      timezone
    );
    const generatedDateOverrides = this._generateDateOverridesFromOrderedEvents(
      newDateOverrideEvents
    );

    return Calendar.create({
      days: newWeekDaysGenerated,
      dateOverrides: {
        daysEvents: generatedDateOverrides,
        defaultDaysEvents: newWeekDaysGenerated,
      },
    });
  }

  protected _generateNewWeekDaysFromOrderedEvents(
    events: EventAndDateType[]
  ): CalendarDayEventsType[] {
    return this._calendar.days.map((d, index) => ({
      ...d.toJson(),
      events: events
        .filter((e) => e.startDate.weekday === index + 1)
        .map((e) => e.event.toJson()),
    }));
  }

  protected _generateDateOverridesFromOrderedEvents(
    events: EventAndDateType[]
  ) {
    const groupedEvents = this._groupCalendarEventsToDates(events);

    const days: CalendarDayEventsType[] = [];

    groupedEvents.forEach((value, key) => {
      const date = DateTime.fromISO(key);

      days.push({
        name: getDayNameByDate(date.toJSDate(), "en")
          .toLowerCase()
          .substring(0, 2) as DayName,
        isAvailable: !!value.length,
        date: date,
        events: value,
      });
    });

    return days;
  }

  protected _groupCalendarEventsToDates(events: EventAndDateType[]) {
    return events.reduce((group, event) => {
      const mapKey = event.startDate.toISO() ?? "";

      const prevEvents = group.get(mapKey) ?? [];
      prevEvents.push(event.event);

      group.set(mapKey ?? "", prevEvents);

      return group;
    }, new Map<string, CalendarEventType[]>());
  }

  protected _transformDateOverrides(
    dateOverrides: CalendarDayEvents[],
    timezone: string
  ) {
    const dayEvents: EventAndDateType[] = [];

    dateOverrides.forEach((d) =>
      dayEvents.push(...this._collectDayEvents(d, timezone))
    );

    return dayEvents.sort(
      (a, b) => a.startDate.toMillis() - b.startDate.toMillis()
    );
  }

  protected _collectDayEvents(day: CalendarDayEvents, timezone: string) {
    return (
      day.events?.map((e) =>
        this._transformEvent(e, day.date?.weekday ?? 1, timezone, day.date)
      ) ?? []
    );
  }

  protected _transformWeekdays(timezone: string) {
    const allEvents: EventAndDateType[] = [];

    this._calendar.days.map((d, index) => {
      allEvents.push(...this._transformWeekday(d, index + 1, timezone));
    }, []);

    return allEvents.sort(
      (a, b) => a.startDate.toMillis() - b.startDate.toMillis()
    );
  }

  protected _transformWeekday(
    day: CalendarDayEvents,
    weekday: number,
    timezone: string
  ) {
    const events: EventAndDateType[] = [];
    day.events?.map((e) =>
      events.push(this._transformEvent(e, weekday, timezone))
    );

    return events;
  }

  protected _transformEvent(
    event: CalendarEvent,
    weekday: number,
    timezone: string,
    date?: DateTime
  ) {
    const startDateTransformed = this._transformTimeToDateOnTimezone(
      event.startTime,
      weekday,
      timezone,
      date
    );
    const startTime = this._transformTime(event.startTime, weekday, timezone);
    const endTime = this._transformTime(event.endTime, weekday, timezone);

    return {
      startDate: startDateTransformed,
      event: CalendarEvent.create({
        id: event.id,
        startTime,
        endTime,
      }),
    };
  }

  protected _transformTimeToDateOnTimezone(
    time: string,
    weekday: any,
    timezone: string,
    defaultDate?: DateTime
  ) {
    defaultDate ??= DateTime.local().set({ weekday });
    defaultDate = defaultDate.setZone(this._originalTimezone, {
      keepLocalTime: true,
    });

    const date = DateTime.fromFormat(time, "HH:mm:ss", {
      zone: this._originalTimezone,
    });

    const dateWithUpdatedHours = defaultDate.set({
      hour: date.hour,
      minute: date.minute,
      second: date.second,
    });

    return dateWithUpdatedHours.setZone(timezone);
  }

  protected _transformTime(time: string, weekday: number, timezone: string) {
    const dateTransformed = this._transformTimeToDateOnTimezone(
      time,
      weekday,
      timezone
    );

    return dateTransformed.toFormat("HH:mm:ss");
  }
}

interface EventAndDateType {
  startDate: DateTime;
  event: CalendarEvent;
}

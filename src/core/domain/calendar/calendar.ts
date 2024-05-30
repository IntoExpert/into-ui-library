import { DateOverride, DateOverrideType } from "./dateOverride/dateOverride";
import { DayName } from "@/libs";
import {
  CALENDAR_EVENT_DEFAULT_OPTIONS,
  CalendarDayEventsType,
} from "@/core/domain/calendar/dayEvents";
import { CalendarEvent as CalendarEvent } from "./dayEvents";
import {
  CalendarDayEvents as CalendarDayEvents,
  CalendarDayEventsOption,
} from "./dayEvents/calendarDayEvents";
import { CalculatedDay } from "./calculatedDay/calculatedDay";
import { CALENDAR_DEFAULT_DAYS_STATE } from "./calendarConst";

export interface CalendarType {
  days: CalendarDayEventsType[];
  dateOverrides?: DateOverrideType;
  totalMinutes?: number;
}

export interface CalendarOptions {
  dayOptions: CalendarDayEventsOption;
}

export class Calendar {
  static create: (json: CalendarType, options?: CalendarOptions) => Calendar = (
    json,
    options
  ) => {
    return new Calendar(json, options);
  };

  static createWithDefaultValue: (
    data?: CalendarType,
    options?: CalendarOptions
  ) => Calendar = (data, options) => {
    const defaultData = {
      days: CALENDAR_DEFAULT_DAYS_STATE,
    };

    return new Calendar(data ?? defaultData, options);
  };

  private _days: CalendarDayEvents[];
  private _dateOverrides: DateOverride;
  private _options: CalendarOptions;

  constructor(data: CalendarType, options?: CalendarOptions) {
    this._days = data.days.map(
      (day) => new CalendarDayEvents(day, options?.dayOptions)
    );
    this._dateOverrides = DateOverride.create({
      daysEvents: data.dateOverrides?.daysEvents ?? [],
      defaultDaysEvents: this._days,
    });

    this._options = options ?? {
      dayOptions: {
        eventOption: CALENDAR_EVENT_DEFAULT_OPTIONS,
      },
    };
  }

  get days(): CalendarDayEvents[] {
    return this._days;
  }

  get dateOverrides() {
    return this._dateOverrides;
  }

  get options() {
    return this._options;
  }

  getDayByName = (name: string): CalendarDayEvents | undefined =>
    this._days.find((day) => day.name === name);

  removeEvent = (event: CalendarEvent, daysEventName: string) => {
    const day = this._days.find((day) => day.name === daysEventName);
    day?.removeEvent(event);
  };

  addEmptyEvent = (dayName: string) => {
    const day = this.getDayByName(dayName);
    day?.addEmptyEvent();
  };

  updateEvent = (dayName: string, event: CalendarEvent) => {
    const day = this.getDayByName(dayName);
    day?.updateEvent(event);
    this._dateOverrides.setDefaultDates(this._days);
  };

  toggleDayAvailability = (dayName: DayName) => {
    const day = this.getDayByName(dayName);
    day?.toggleAvailability();
    this._dateOverrides.setDefaultDates(this._days);
  };

  // Copy day availability to target days
  copyDayAvailability(sourceDayName: string, targetDays: DayName[]) {
    const sourceDay = this.getDayByName(sourceDayName);

    if (!sourceDay) {
      return;
    }

    this._days = this._days.map((day) => {
      if (!targetDays.includes(day.name)) {
        return day.copy();
      }

      return new CalendarDayEvents(
        {
          name: day.name,
          events: sourceDay.events?.map((e) => e.copy()),
          isAvailable: sourceDay.isAvailable,
          date: sourceDay.date,
        },
        this._options.dayOptions
      );
    });
  }

  // Update date overrides
  updateDateOverrides = (dateOverrides: DateOverride) => {
    this._dateOverrides = dateOverrides;
  };

  getDayCalculated = (date: Date) => {
    const dayName = date
      .toLocaleDateString("en", { weekday: "short" })
      .toLowerCase()
      .slice(0, 2);

    const dayEvents = this._dateOverrides.getDateOverrides(date);
    const weeklyDay = this.getDayByName(dayName);

    return CalculatedDay.create({
      events:
        dayEvents ??
        (weeklyDay?.isAvailable ? weeklyDay.validEvents : undefined),
      isOverride: !!dayEvents,
      date: date,
    });
  };

  resetDateOverride = (date: Date) => {
    this._dateOverrides.resetDate(date);
  };

  resetAllDaysOfIndex = (dayWeekIndex: number) => {
    this._dateOverrides.resetAllDaysOfWeekIndex(dayWeekIndex);
  };

  hasInvalidEvents = () => {
    return this.days.some((d) => d.hasInvalidEvents());
  };

  toJson = (): CalendarType => ({
    days: this._days.map((day) => day.toJson()),
    dateOverrides: this._dateOverrides.toJson(),
  });
}

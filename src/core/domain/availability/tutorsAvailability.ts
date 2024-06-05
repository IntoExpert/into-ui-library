import { DateTime } from "luxon";
import {
  DayName,
  getFirstDayOfWeek,
  setDateAtMidnight,
} from "../../../components/countdown/dateTime";
import { Calendar, CalendarEventType } from "../calendar";
import { CALENDAR_DEFAULT_DAYS_STATE } from "../calendar/calendarConst";
import { TUTOR_AVAILABILITY_CALENDAR_OPTIONS } from "./tutorAvailabilitConts";
import { CalendarTimeZoneTransformer } from "../calendar/timeZone/calendarTimeZoneTransformer";
import { CalculatedDay } from "../calendar/calculatedDay";

const MAX_AVAILABILITY_WEEK_TO_SHOW = 12;
const START_WEEK_NUMBER = 1;

export interface CalendarDayEventsBackendType {
  name: DayName;
  date?: number | null;
  isAvailable: boolean;
  events?: CalendarEventType[];
}

export interface UserCalendar {
  datesOverride?: CalendarDayEventsBackendType[];
  weeklySchedule?: CalendarDayEventsBackendType[];
  timesBooked?: { startTime: number; endTime: number }[];
}
export interface TutorAvailabilityBackendType {
  calendar: UserCalendar;
  timezone?: string | null;
}

export interface TutorAvailabilityType {
  calendar: Calendar;
  timezone?: string;
  timesBooked?: { startTime: Date; endTime: Date }[];
}

export class TutorAvailability {
  static create = (tutorAvailability: TutorAvailabilityType) => {
    return new TutorAvailability(tutorAvailability);
  };

  static createFromBackend = (
    tutorAvailability: UserCalendar,
    timezone?: string
  ) => {
    const days = tutorAvailability.weeklySchedule?.length
      ? tutorAvailability.weeklySchedule.map((d) => ({
          ...d,
          date: d.date ? DateTime.fromSeconds(d.date) : undefined,
        }))
      : CALENDAR_DEFAULT_DAYS_STATE;

    return this.create({
      calendar: Calendar.create(
        {
          days,
          dateOverrides: {
            daysEvents:
              tutorAvailability.datesOverride?.map((d) => ({
                ...d,
                date: d.date ? DateTime.fromSeconds(d.date) : undefined,
              })) ?? [],
            defaultDaysEvents: days,
          },
        },
        TUTOR_AVAILABILITY_CALENDAR_OPTIONS
      ),
      timezone,
      timesBooked:
        tutorAvailability.timesBooked?.map((tb) => ({
          startTime: DateTime.fromSeconds(tb.startTime).toJSDate(),
          endTime: DateTime.fromSeconds(tb.endTime).toJSDate(),
        })) ?? [],
    });
  };

  static createDefault = () =>
    new TutorAvailability({ calendar: Calendar.createWithDefaultValue() });

  protected _calendar: Calendar;
  protected _timezone?: string;
  protected _timesBooked?: { startTime: Date; endTime: Date }[];

  protected constructor(tutorAvailability: TutorAvailabilityType) {
    this._calendar = tutorAvailability.calendar;
    this._timezone = tutorAvailability.timezone;
    this._timesBooked = tutorAvailability.timesBooked;
  }

  get calendar() {
    return this._calendar;
  }

  get timezone() {
    return this._timezone;
  }

  get bookedTimes() {
    return this._timesBooked;
  }

  transformCalendarToTimezone(timezone: string) {
    const calendarTransformer = new CalendarTimeZoneTransformer(
      this.calendar,
      this._timezone
    );

    const calendar = calendarTransformer.transformTo(timezone);

    this._calendar = calendar;
  }

  get backendCalendar(): UserCalendar {
    const calendarJson = this._calendar.toJson();

    return {
      weeklySchedule: calendarJson.days.map((d) => ({
        ...d,
        date: d.date?.toSeconds(),
      })),
      datesOverride:
        calendarJson.dateOverrides?.daysEvents.map((d) => ({
          ...d,
          date: d.date?.toSeconds(),
        })) ?? [],
    };
  }

  toBackendJson(): TutorAvailabilityBackendType {
    return {
      calendar: {
        ...this.backendCalendar,
        weeklySchedule: this.backendCalendar.weeklySchedule?.map((e) => ({
          ...e,
          date: e.date ?? null,
        })),
        timesBooked:
          this._timesBooked?.map((tb) => ({
            startTime: tb.startTime.getTime() / 1000,
            endTime: tb.endTime.getTime() / 1000,
          })) ?? [],
      },
      timezone: this._timezone ?? null,
    };
  }

  toJson(): TutorAvailabilityType {
    return {
      calendar: this.calendar,
      timezone: this._timezone,
      timesBooked: this._timesBooked,
    };
  }
}

export interface TutorDaysAvailability {
  date: Date;
  availabilities: CalculatedDay;
}

export class TutorsWeeklyAvailability {
  protected _weekStartDate: Date;
  protected _weekNumberFromNow: number;
  protected _availability: TutorAvailability;

  static create = (tutorAvailability: TutorAvailability) => {
    return new TutorsWeeklyAvailability(
      tutorAvailability,
      START_WEEK_NUMBER,
      getFirstDayOfWeek()
    );
  };

  static createFromInstance = (tutorAvailability: TutorsWeeklyAvailability) => {
    return new TutorsWeeklyAvailability(
      tutorAvailability._availability,
      tutorAvailability._weekNumberFromNow,
      tutorAvailability._weekStartDate
    );
  };

  protected constructor(
    tutorAvailability: TutorAvailability,
    startWeekNumber: number,
    weekStartDate: Date
  ) {
    this._availability = tutorAvailability;
    this._weekNumberFromNow = startWeekNumber;
    this._weekStartDate = weekStartDate;
  }

  nextWeek() {
    if (this._weekNumberFromNow < MAX_AVAILABILITY_WEEK_TO_SHOW) {
      this._weekStartDate.setDate(this._weekStartDate.getDate() + 7);
      this._weekNumberFromNow++;
    }
  }

  get canGoNext() {
    return this._weekNumberFromNow <= MAX_AVAILABILITY_WEEK_TO_SHOW;
  }

  prevWeek() {
    if (this._weekNumberFromNow > 0) {
      this._weekStartDate.setDate(this._weekStartDate.getDate() - 7);
      this._weekNumberFromNow--;
    }
  }

  get canGoPrev() {
    return this._weekNumberFromNow > START_WEEK_NUMBER;
  }

  resetWeek() {
    this._weekStartDate.setDate(
      this._weekStartDate.getDate() -
        7 * (this._weekNumberFromNow - START_WEEK_NUMBER)
    );
    this._weekNumberFromNow = START_WEEK_NUMBER;
  }

  get isInFirstWeek() {
    return this._weekNumberFromNow === START_WEEK_NUMBER;
  }

  get daysAvailability() {
    if (!this._availability) return [];

    const availabilities: TutorDaysAvailability[] = [];
    const now = new Date();
    setDateAtMidnight(now);

    for (let i = 0; i < 7; i++) {
      const dayDate = new Date(this._weekStartDate);
      dayDate.setDate(dayDate.getDate() + i);
      if (dayDate.getTime() < now.getTime()) {
        continue;
      }

      const calculatedDay =
        this._availability.calendar.getDayCalculated(dayDate);

      availabilities.push({
        date: dayDate,
        availabilities: calculatedDay,
      });
    }

    return availabilities;
  }

  get bookedTimes() {
    return this._availability.bookedTimes ?? [];
  }
}

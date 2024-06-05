import { CalendarOptions } from "../calendar";

export const TUTOR_AVAILABILITY_MAX_PERIOD_IN_WEEKS = 12;
export const TUTOR_AVAILABILITY_CALENDAR_OPTIONS: CalendarOptions = {
  dayOptions: {
    eventOption: {
      minDurationInMinute: 60,
      maxDurationInMinutes: 60 * 24, // 24 hour a day
      minEventInterval: 30,
    },
  },
};
export const MIN_TUTOR_AVAILABILITY_MINS_PER_WEEK = 120;
export const MIN_TUTOR_AVAILABILITY_ACTIVE_DAYS = 1;

export const dateToTimeWith12HoursFormat = (
  date: Date,
  locale: string
): string => {
  return date.toLocaleTimeString(locale, {
    hourCycle: "h12",
    hour: "numeric",
    minute: "numeric",
  });
};

export interface DateInterval {
  minutes: number;
  hours: number;
  days: number;
  weeks: number;
  year: number;
  seconds: number;
}

export const durationBetweenTowDates = (
  start: Date,
  end: Date
): DateInterval => {
  let durationInMs = end.getTime() - start.getTime();
  durationInMs = durationInMs < 0 ? 0 : durationInMs;
  let durationSeconds = Math.floor(durationInMs / 1000);
  let durationMinutes = Math.floor(durationSeconds / 60);
  durationSeconds -= durationMinutes * 60;
  let durationHours = Math.floor(durationMinutes / 60);
  durationMinutes -= durationHours * 60;
  let durationDays = Math.floor(durationHours / 24);
  durationHours -= durationDays * 24;
  let durationWeeks = Math.floor(durationDays / 7);
  durationDays -= durationWeeks * 7;
  let durationYear = Math.floor(durationWeeks / 52);
  durationWeeks -= durationYear * 52;

  return {
    minutes: durationMinutes,
    hours: durationHours,
    days: durationDays,
    weeks: durationWeeks,
    year: durationYear,
    seconds: durationSeconds,
  };
};

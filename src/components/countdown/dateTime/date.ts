import { durationBetweenTowDates } from "./time";

export const formateDateToInputDateString = (
  date?: Date
): string | undefined => {
  if (!date) return undefined;

  return `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
};

export const formateDateInputDateTimeString = (
  date?: Date
): string | undefined => {
  if (!date) return undefined;

  return `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")} ${(
    date.getHours() % 24
  )
    .toString()
    .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")} ${
    date?.getHours() / 12 > 1 ? "PM" : "AM"
  }`;
};

export const dateToHumanReadableDate = (
  date: Date,
  locale: string = "en",
  formateMessage: any
) => {
  const now = new Date();

  const dateComponents = durationBetweenTowDates(date, now);

  if (dateComponents.year > 1) {
    return date.toLocaleDateString(locale, { dateStyle: "long" });
  }

  if (dateComponents.days > 7) {
    return date.toLocaleDateString(locale, { month: "short", day: "2-digit" });
  }

  if (dateComponents.days >= 2) {
    return formateMessage("duration.days", {
      count: dateComponents.days.toFixed(0),
    });
  }

  if (dateComponents.days >= 1) {
    return formateMessage("duration.days", {
      count: dateComponents.days.toFixed(0),
    });
  }

  if (dateComponents.hours >= 2) {
    return formateMessage("duration.hours", {
      count: dateComponents.hours.toFixed(0),
    });
  }

  if (dateComponents.hours >= 1) {
    return formateMessage("duration.hours", {
      count: dateComponents.hours.toFixed(0),
    });
  }

  if (dateComponents.minutes >= 2) {
    return formateMessage("duration.minutes", {
      count: dateComponents.minutes.toFixed(0),
    });
  }

  if (dateComponents.minutes >= 1) {
    return formateMessage("duration.minutes", {
      count: dateComponents.minutes.toFixed(0),
    });
  }

  if (dateComponents.minutes < 1) {
    return formateMessage(`duration.justNow`);
  }
};

export const getDayNameByDate = (
  date: Date,
  locale: string,
  format: "long" | "short" | "narrow" = "short"
): string => date.toLocaleDateString(locale, { weekday: format });

export const getWeekdayIndexByDayName = (name: DayName) => {
  switch (name) {
    case "mo":
      return 1;
    case "tu":
      return 2;
    case "we":
      return 3;
    case "th":
      return 4;
    case "fr":
      return 5;
    case "sa":
      return 6;
    case "su":
      return 7;
  }
};

export type DayName = "mo" | "tu" | "we" | "th" | "fr" | "sa" | "su";

export const setDateAtMidnight = (date: Date): Date => {
  date.setHours(0, 0, 0, 0);
  return date;
};

export const setAtDayEnd = (date: Date): Date => {
  date.setHours(23, 59, 59, 99);
  return date;
};

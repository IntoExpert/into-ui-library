import { setDateAtMidnight } from "../../../countdown/dateTime";
import {
  CalculatedDay,
  CalculatedDayType,
} from "./calculatedDay/calculatedDay";
import { Calendar } from "./calendar";

export interface DaysCalculatorType {
  startDate: Date;
  endDate: Date;
  currentMonth: Date;
  calendar: Calendar;
}

export class DaysCalculator {
  private _startDate: Date;
  private _endDate: Date;
  private _currentMonth: Date;
  private _calendar: Calendar;
  private _calculatedDays: CalculatedDay[];

  constructor(data: DaysCalculatorType) {
    this._startDate = setDateAtMidnight(new Date(data.startDate));
    this._endDate = setDateAtMidnight(new Date(data.endDate));
    this._calendar = data.calendar;
    this._currentMonth = new Date(data.currentMonth);
    this._currentMonth.setDate(1);
    this._calculatedDays = this.build(false);
  }

  build = (isMonth: boolean = true): CalculatedDay[] => {
    const start = isMonth ? this._padMonthStart() : this._startDate;
    const end = isMonth ? this._padMonthEnd() : this._endDate;

    let currentDate = new Date(start);
    const calculatedDays: CalculatedDay[] = [];

    while (currentDate.getTime() <= end.getTime()) {
      const date = new Date(currentDate);
      const data: CalculatedDayType = {
        date: date,
        isDisabled: false,
      };
      if (this.isDateOutOfRange(date)) {
        data.isDisabled = true;
        calculatedDays.push(CalculatedDay.create(data));
      } else {
        const daysCalendarEvents = this._calendar.getDayCalculated(date);
        calculatedDays.push(daysCalendarEvents);
      }

      currentDate.setDate(currentDate.getDate() + 1);
    }

    return calculatedDays;
  };

  get calculatedValues() {
    return {
      totalMinutes: this._calculatedDays.reduce((prev, current) => {
        return prev + current.totalMinutes;
      }, 0),
      sessionsCount: this._calculatedDays.reduce((prev, current) => {
        return prev + current.events.length;
      }, 0),
      activeDaysCount: this._calculatedDays.filter((d) => d.totalMinutes > 0)
        .length,
    };
  }

  private _padMonthStart = (): Date => {
    const dayOfWeek = this._currentMonth.getDay();
    const paddedDate = new Date(this._currentMonth);
    paddedDate.setDate(this._currentMonth.getDate() - dayOfWeek + 1);

    return paddedDate;
  };

  private _padMonthEnd = (): Date => {
    const weeksDaysCount = 7;
    const endOfMonth = this._getEndOfMonth();
    const dayOfWeek = endOfMonth.getDay();
    if (dayOfWeek === 0) {
      return endOfMonth;
    }
    endOfMonth.setDate(endOfMonth.getDate() + weeksDaysCount - dayOfWeek);
    return endOfMonth;
  };

  private _getEndOfMonth = (): Date => {
    let endOfMonth = new Date(this._currentMonth);
    endOfMonth.setMonth(endOfMonth.getMonth() + 1);
    endOfMonth.setDate(0);
    endOfMonth.setHours(23);
    endOfMonth.setMinutes(59);
    endOfMonth.setSeconds(59);
    return endOfMonth;
  };

  private isDateOutOfRange = (date: Date): boolean => {
    if (setDateAtMidnight(date).getTime() < this._startDate.getTime()) {
      return true;
    }
    if (setDateAtMidnight(date).getTime() > this._endDate.getTime()) {
      return true;
    }

    return false;
  };

  private isDateOutOfMonth = (date: Date): boolean => {
    if (date.getTime() < this._currentMonth.getTime()) return true;
    if (date.getTime() > this._getEndOfMonth().getTime()) return true;

    return false;
  };
}

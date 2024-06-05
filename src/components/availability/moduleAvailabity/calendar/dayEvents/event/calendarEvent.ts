import { v4 as uuidv4 } from "uuid";
import { CALENDAR_EVENT_DEFAULT_OPTIONS } from "./calendarEventConst";

export interface CalendarEventType {
  id: string;
  startTime: string;
  endTime: string;
  isNested?: boolean;
}

export interface TimeType {
  hour: number;
  minute: number;
}

export interface CalendarEventOptions {
  maxDurationInMinutes: number;
  minDurationInMinute: number;
  minEventInterval: number;
}

export class CalendarEvent {
  static validate = (startTime: string, endTime: string): boolean => {
    const startTimeAsNumber = this.timeStringToTimeNumbers(startTime);
    const endTimeAsNumber = this.timeStringToTimeNumbers(endTime);

    if (endTimeAsNumber.hour > startTimeAsNumber.hour) return true;
    if (endTimeAsNumber.hour == startTimeAsNumber.hour) {
      if (endTimeAsNumber.minute > startTimeAsNumber.minute) return true;
    }

    return false;
  };

  static dateToTimString = (date?: Date | null): string => {
    if (!date) return "";

    return this.timeNumbersToTimeString(
      date?.getHours() ?? 0,
      date?.getMinutes() ?? 0
    );
  };

  static timeStringToTimeNumbers = (time: string): TimeType => {
    const [hour, minute] = time.split(":");

    return {
      hour: parseInt(hour, 10),
      minute: parseInt(minute, 10),
    };
  };

  static timeNumbersToTimeString = (hours: number, minutes: number): string => {
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:00`;
  };

  static create(
    json: CalendarEventType,
    eventOptions?: CalendarEventOptions
  ): CalendarEvent {
    return new CalendarEvent(json, eventOptions);
  }

  static createEmpty = (eventOptions?: CalendarEventOptions) =>
    this.create({ id: uuidv4(), startTime: "", endTime: "" }, eventOptions);

  private _id: string;
  private _startTime: string;
  private _endTime: string;
  private _isNested?: boolean;
  private _eventOptions: CalendarEventOptions;

  constructor(data: CalendarEventType, eventOptions?: CalendarEventOptions) {
    this._id = data.id;
    this._startTime = data.startTime;
    this._endTime = data.endTime;
    this._isNested = !!data.isNested;
    this._eventOptions = eventOptions ?? CALENDAR_EVENT_DEFAULT_OPTIONS;
  }

  get id(): string {
    return this._id;
  }

  get startTime(): string {
    return this._startTime;
  }
  get endTime(): string {
    return this._endTime;
  }

  get startTimeAsDate(): Date | undefined {
    if (!this._startTime) return undefined;

    const date = new Date();
    const timeAsNumbers = this.startTimeToHoursAndMinutes();
    date.setHours(timeAsNumbers!.hour);
    date.setMinutes(timeAsNumbers!.minute);

    return date;
  }

  get endTimeAsDate(): Date | undefined {
    if (!this._endTime) return undefined;

    const date = new Date();
    const timeAsNumbers = this.endTimeToHoursAndMinutes();
    date.setHours(timeAsNumbers!.hour);
    date.setMinutes(timeAsNumbers!.minute);
    return date;
  }
  /**
   * Returns the duration of an event in minutes
   */
  get duration(): number {
    const startTime = this.startTimeToHoursAndMinutes();
    const endTime = this.endTimeToHoursAndMinutes();
    const startTimeInMinutes =
      (startTime?.hour ?? 0) * 60 + (startTime?.minute ?? 0);
    const endTimeInMinutes = (endTime?.hour ?? 0) * 60 + (endTime?.minute ?? 0);
    return endTimeInMinutes - startTimeInMinutes;
  }

  get isOverThanMaxDuration(): boolean {
    return this.duration > this._eventOptions.maxDurationInMinutes;
  }

  copy = (): CalendarEvent => {
    return new CalendarEvent(
      {
        id: this.id,
        startTime: this._startTime,
        endTime: this._endTime,
        isNested: this._isNested ?? undefined,
      },
      this._eventOptions
    );
  };

  startTimeToHoursAndMinutes(): TimeType | undefined {
    if (!this._startTime || !this._endTime) return undefined;
    return CalendarEvent.timeStringToTimeNumbers(this._startTime);
  }

  endTimeToHoursAndMinutes(): TimeType | undefined {
    if (!this._endTime) return undefined;
    return CalendarEvent.timeStringToTimeNumbers(this._endTime);
  }

  isEqual(event: CalendarEvent): boolean {
    return event.startTime === this.startTime && event.endTime === this.endTime;
  }

  get isValid(): boolean {
    if (!this._startTime.length || !this._endTime.length) return false;
    return (
      CalendarEvent.validate(this.startTime, this.endTime) && !this._isNested
    );
  }

  setNested = (): void => {
    this._isNested = true;
  };

  setNotNested = (): void => {
    this._isNested = false;
  };

  toJson = (): CalendarEventType => ({
    id: this.id,
    startTime: this._startTime,
    endTime: this._endTime,
    isNested: this._isNested ?? undefined,
  });
}

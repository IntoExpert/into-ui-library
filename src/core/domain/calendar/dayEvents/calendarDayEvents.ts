import { ValidationException } from "../../../shared/exceptions/validationException";
import {
  CalendarEventOptions,
  CalendarEventType as CalendarEventType,
} from "./event/calendarEvent";
import {
  CALENDAR_EVENT_DEFAULT_OPTIONS,
  CalendarEvent as CalendarEvent,
} from "./event";
import { DayName, getFirstDayOfWeek } from "@/libs";
import { DateTime } from "luxon";

export interface CalendarDayEventsType {
  name: DayName;
  date?: DateTime;
  isAvailable: boolean;
  events?: CalendarEventType[];
}

export interface CalendarDayEventsOption {
  eventOption: CalendarEventOptions;
}

export class CalendarDayEvents {
  static createOverrideDate = (
    data: CalendarDayEventsType,
    options: CalendarDayEventsOption
  ): CalendarDayEvents => {
    if (!data.date) throw new ValidationException("override.date.required");

    return new CalendarDayEvents(
      {
        name: data.name,
        isAvailable: data.isAvailable,
        date: data.date,
        events: data.events,
      },
      options
    );
  };

  static getDayOfWeekDate = (index: number) => {
    const firstDayOfWeek = getFirstDayOfWeek();
    const date = new Date(firstDayOfWeek);
    date.setDate(firstDayOfWeek.getDate() + index);
    return date;
  };

  private _name: DayName;
  private _events?: CalendarEvent[];
  private _isAvailable: boolean;
  private _date?: DateTime;
  private _options: CalendarDayEventsOption;

  public copy = (): CalendarDayEvents => {
    return new CalendarDayEvents(
      {
        name: this._name,
        events: this._events?.map((e) => e.copy().toJson()) ?? [],
        isAvailable: this._isAvailable,
        date: this._date,
      },
      this._options
    );
  };

  constructor(data: CalendarDayEventsType, options?: CalendarDayEventsOption) {
    this._name = data.name;
    this._events = data.events?.map(
      (e) => new CalendarEvent(e, options?.eventOption)
    );
    this._isAvailable = data.isAvailable;
    this._date = data.date;
    this._options = options ?? {
      eventOption: CALENDAR_EVENT_DEFAULT_OPTIONS,
    };
    this.sort();
  }

  // Check day's availability
  private _checkAvailability = () => {
    if (!this._events?.length) {
      this._isAvailable = false;
      return;
    }

    this._isAvailable = true;
  };

  // Check nested events
  private _checkNestedEvents = (event: CalendarEvent) => {
    const nestedEvent = this._events?.find((e) => {
      if (e.id === event.id) return false;

      const checkedEventStartTimeAsNumber =
        CalendarEvent.timeStringToTimeNumbers(e.startTime);
      const checkedEventEndTimeAsNumber = CalendarEvent.timeStringToTimeNumbers(
        e.endTime
      );
      const eventToInsertStartTimeAsNumber =
        CalendarEvent.timeStringToTimeNumbers(event.startTime);
      const eventToInsertEndTimeAsNumber =
        CalendarEvent.timeStringToTimeNumbers(event.endTime);

      // Check if event start time is after an event start time
      if (
        eventToInsertStartTimeAsNumber.hour >
          checkedEventStartTimeAsNumber.hour ||
        (eventToInsertStartTimeAsNumber.hour ===
          checkedEventStartTimeAsNumber.hour &&
          eventToInsertStartTimeAsNumber.minute >=
            checkedEventStartTimeAsNumber.minute)
      ) {
        // Check if event start time is before an event end time
        if (
          eventToInsertStartTimeAsNumber.hour <
            checkedEventEndTimeAsNumber.hour ||
          (eventToInsertStartTimeAsNumber.hour ===
            checkedEventEndTimeAsNumber.hour &&
            eventToInsertStartTimeAsNumber.minute <
              checkedEventEndTimeAsNumber.minute)
        ) {
          return true;
        }
      } else {
        // Check if event start time, end time are holding another event
        if (
          eventToInsertEndTimeAsNumber.hour >
            checkedEventEndTimeAsNumber.hour ||
          (eventToInsertEndTimeAsNumber.hour ===
            checkedEventEndTimeAsNumber.hour &&
            eventToInsertEndTimeAsNumber.minute >
              checkedEventEndTimeAsNumber.minute)
        ) {
          return true;
        }
      }

      if (
        eventToInsertEndTimeAsNumber.hour >
          checkedEventStartTimeAsNumber.hour ||
        (eventToInsertEndTimeAsNumber.hour ===
          checkedEventStartTimeAsNumber.hour &&
          eventToInsertEndTimeAsNumber.minute >
            checkedEventStartTimeAsNumber.minute)
      ) {
        if (
          eventToInsertEndTimeAsNumber.hour <
            checkedEventEndTimeAsNumber.hour ||
          (eventToInsertEndTimeAsNumber.hour ===
            checkedEventEndTimeAsNumber.hour &&
            eventToInsertEndTimeAsNumber.minute <=
              checkedEventEndTimeAsNumber.minute)
        ) {
          return true;
        }
      }

      return false;
    });

    if (nestedEvent) {
      return false;
      // throw new ValidationException("daysEvents.nestedEvents");
    }

    return true;
  };

  getEventByStartTime = (startTime: string): CalendarEvent | undefined => {
    return this.events?.find((e) => e.startTime === startTime);
  };

  getEventIndexById = (id: string): number | undefined => {
    return this.events?.findIndex((e) => e.id === id);
  };

  // Remove an event from the day
  removeEvent = (event: CalendarEvent): boolean => {
    const index = this.getEventIndexById(event.id);

    if (index == undefined || index < 0) return false;

    this._events?.splice(index, 1);

    this._checkAvailability();

    this._validateEvents();

    return true;
  };

  // Add empty event with no values
  addEmptyEvent = () => {
    if (!this._events) {
      this._events = [];
    }

    this._events.push(CalendarEvent.createEmpty(this._options.eventOption));

    this._checkAvailability();
  };

  // Update created event
  updateEvent = (event: CalendarEvent) => {
    if (!this._checkNestedEvents(event)) {
      event.setNested();
    }

    const eventIndex = this.getEventIndexById(event.id);

    if (eventIndex == undefined || eventIndex < 0) {
      throw new ValidationException("event.notExist");
    }
    this._isAvailable = true;
    this._events![eventIndex] = event;

    this._validateEvents();

    this.sort();
  };

  // Add multiple events
  addMultipleEvents = (events: CalendarEvent[]) => {
    if (events.some((e) => !this._checkNestedEvents(e))) return;
    this._events?.push(...events);
  };

  toggleAvailability = () => {
    if (this._isAvailable) {
      this._events = [];
    } else {
      this.events?.push(CalendarEvent.createEmpty(this._options.eventOption));
    }

    this._isAvailable = !this._isAvailable;
  };

  get events(): CalendarEvent[] | undefined {
    return this._events;
  }

  get validEvents(): CalendarEvent[] {
    return this.events?.filter((e) => e.isValid) ?? [];
  }

  get name(): DayName {
    return this._name;
  }

  get isAvailable(): boolean {
    return this._isAvailable;
  }

  get date(): DateTime | undefined {
    return this._date;
  }

  hasInvalidEvents = (): boolean => {
    return !!this.events?.some((e) => {
      return !e.isValid;
    });
  };

  sort = () => {
    this._events?.sort((a, b) => {
      const aStartTiemAsNumbers = a.startTimeToHoursAndMinutes();
      const bStartTiemAsNumbers = b.startTimeToHoursAndMinutes();

      const hoursDiff =
        (aStartTiemAsNumbers?.hour ?? 0) - (bStartTiemAsNumbers?.hour ?? 0);
      const minutesDiff =
        (aStartTiemAsNumbers?.minute ?? 0) - (bStartTiemAsNumbers?.minute ?? 0);

      return hoursDiff ?? minutesDiff;
    });

    this._events = [...(this._events ?? [])];
  };

  isEqual = (daysEvents: CalendarDayEvents): boolean => {
    if (this.validEvents.length !== daysEvents.validEvents.length) return false;
    return !this.validEvents?.some((e) =>
      daysEvents.validEvents.some((outerE) => !e.isEqual(outerE))
    );
  };

  _validateEvents = () => {
    this._events = this._events?.map((e) => {
      if (this._checkNestedEvents(e)) {
        e.setNotNested();
      }

      return e;
    });
  };

  toJson = (): CalendarDayEventsType => ({
    name: this._name,
    isAvailable: this._isAvailable,
    events: this._events?.map((e) => e.toJson()),
    date: this._date,
  });
}

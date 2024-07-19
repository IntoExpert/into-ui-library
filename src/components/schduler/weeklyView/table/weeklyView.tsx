import React, { useState } from "react";
import { UiElementProps } from "../../../common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { DateTime } from "luxon";

interface Event {
  name: string;
  slot?: any;
  startTime: string;
  endTime: string;
  merge: boolean;
}

interface SchedulerTableProps extends UiElementProps {
  events: Event[];
}

const generateWeekDays = (startOfWeek: DateTime): DateTime[] => {
  return Array.from({ length: 7 }, (_, i) => startOfWeek.plus({ days: i }));
};

const numberOfSlotsPerDay = 48;

const generateTimeSlots = (): string[] => {
  return Array.from({ length: numberOfSlotsPerDay }, (_, i) => {
    const hour = Math.floor(i / 2);
    const minute = (i % 2) * 30;
    const startTime = `${hour.toString().padStart(2, "0")}:${minute
      .toString()
      .padStart(2, "0")}`;
    const endTime = DateTime.now().set({ hour, minute }).plus({ minutes: 30 });
    const endTimeString = endTime.toFormat("HH:mm");
    return `${startTime} - ${endTimeString}`;
  });
};

const eventInSlot = (event: Event, day: DateTime, slot: string): boolean => {
  const eventStart = DateTime.fromISO(event.startTime);

  const [startTime, endTime] = slot.split(" - ");
  const slotStart = day.set({
    hour: Number(startTime.split(":")[0]),
    minute: Number(startTime.split(":")[1]),
  });
  const slotEnd = day.set({
    hour: Number(endTime.split(":")[0]),
    minute: Number(endTime.split(":")[1]),
  });

  return eventStart >= slotStart && eventStart < slotEnd;
};

const isCurrentWeek = (weekStart: DateTime): boolean => {
  const currentWeekStart = DateTime.now().startOf("week");
  return weekStart.hasSame(currentWeekStart, "day");
};

export const SchedulerTable: React.FC<SchedulerTableProps> = ({
  events,
  className,
}) => {
  const [weekStart, setWeekStart] = useState(DateTime.now().startOf("week"));
  const weekDays = generateWeekDays(weekStart);
  const timeSlots = generateTimeSlots();

  const calculateColSpan = (startTime: string, endTime: string): number => {
    const startDate = DateTime.fromISO(startTime);
    const endDate = DateTime.fromISO(endTime);

    if (!startDate.isValid || !endDate.isValid) {
      throw new Error("Invalid date format provided");
    }

    const diff = endDate.diff(startDate, "minutes").minutes;
    return Math.ceil(diff / 30);
  };

  const handlePreviousWeek = () => {
    setWeekStart(weekStart.minus({ weeks: 1 }));
  };

  const handleNextWeek = () => {
    setWeekStart(weekStart.plus({ weeks: 1 }));
  };

  return (
    <div className={className}>
      <table className="min-w-full bg-white">
        <thead className="bg-white text-black">
          <tr>
            <th className="w-20 py-3 px-4 flex uppercase gap-1 !text-xs min-w-40">
              <p className="py-3 !font-medium">
                {isCurrentWeek(weekStart)
                  ? "This Week"
                  : "Week of " + weekStart.toLocaleString()}
              </p>
              <div className="flex my-2 gap-1">
                <button
                  onClick={handlePreviousWeek}
                  className="bg-primaryVariant px-2 py- rounded"
                >
                  <span className="cursor-pointer text-primary">
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </span>
                </button>
                <button
                  onClick={handleNextWeek}
                  className="bg-primaryVariant px-2 py-1 rounded"
                >
                  <span className="cursor-pointer text-primary">
                    <FontAwesomeIcon icon={faChevronRight} />
                  </span>
                </button>
              </div>
            </th>
            {weekDays.map((day, index) => (
              <th
                key={index}
                className="py-3 px-4 uppercase font-semibold text-sm"
              >
                {day.toLocaleString({
                  weekday: "short",
                  month: "numeric",
                  day: "numeric",
                })}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timeSlots.map((slot, slotIndex) => (
            <tr key={slot}>
              <td className="py-2 px-4 border !h-full text-center">{slot}</td>
              {weekDays.map((day, dayIndex) => {
                const eventsForDay = events.filter((event) =>
                  eventInSlot(event, day, slot)
                );

                return eventsForDay.length > 0 ? (
                  eventsForDay.map((event, eventIndex) => (
                    <td
                      key={eventIndex}
                      rowSpan={calculateColSpan(event.startTime, event.endTime)}
                      className={`border min-w-40 align-top h-12`}
                    >
                      <div className="h-full">{event.slot}</div>
                    </td>
                  ))
                ) : (
                  <td className="py-2 px-4 border text-center min-w-40 h-12"></td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

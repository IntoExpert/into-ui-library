import React, { useState } from "react";
import { UiElementProps } from "../../../common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

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

const getWeekStart = (date: Date): Date => {
  const dateCopy = new Date(date);
  const day = dateCopy.getDay();
  const diff = dateCopy.getDate() - day + (day === 0 ? -6 : 1);
  return new Date(dateCopy.setDate(diff));
};

const generateWeekDays = (startOfWeek: Date): Date[] => {
  return Array.from({ length: 7 }, (_, i) => {
    const day = new Date(startOfWeek);
    day.setDate(day.getDate() + i);
    return day;
  });
};

const generateTimeSlots = (): string[] => {
  return Array.from({ length: 48 }, (_, i) => {
    const hour = Math.floor(i / 2);
    const minute = (i % 2) * 30;
    const startTime = `${hour.toString().padStart(2, "0")}:${minute
      .toString()
      .padStart(2, "0")}`;
    const endTime = new Date();
    endTime.setHours(hour, minute + 30, 0, 0);
    const endHour = endTime.getHours();
    const endMinute = endTime.getMinutes();
    const endTimeString = `${endHour.toString().padStart(2, "0")}:${endMinute
      .toString()
      .padStart(2, "0")}`;
    return `${startTime} - ${endTimeString}`;
  });
};

const eventInSlot = (event: Event, day: Date, slot: string): boolean => {
  const eventStart = new Date(event.startTime);

  const slotStart = new Date(day);
  const [startTime, endTime] = slot.split(" - ");
  const [startHour, startMinute] = startTime.split(":").map(Number);
  slotStart.setHours(startHour, startMinute, 0, 0);

  const slotEnd = new Date(day);
  const [endHour, endMinute] = endTime.split(":").map(Number);
  slotEnd.setHours(endHour, endMinute, 0, 0);

  return eventStart >= slotStart && eventStart < slotEnd;
};

const isCurrentWeek = (weekStart: Date): boolean => {
  const currentWeekStart = getWeekStart(new Date());
  return (
    weekStart.getFullYear() === currentWeekStart.getFullYear() &&
    weekStart.getMonth() === currentWeekStart.getMonth() &&
    weekStart.getDate() === currentWeekStart.getDate()
  );
};

export const SchedulerTable: React.FC<SchedulerTableProps> = ({
  events,
  className,
}) => {
  const [weekStart, setWeekStart] = useState(getWeekStart(new Date()));
  const weekDays = generateWeekDays(weekStart);
  const timeSlots = generateTimeSlots();

  const calculateColSpan = (startTime: string, endTime: string): number => {
    const startDate = new Date(startTime);
    const endDate = new Date(endTime);

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      throw new Error("Invalid date format provided");
    }

    const diff = endDate.getTime() - startDate.getTime();

    const colSpan = Math.ceil(diff / (1000 * 60 * 30));

    return colSpan;
  };

  const handlePreviousWeek = () => {
    const newWeekStart = new Date(weekStart);
    newWeekStart.setDate(weekStart.getDate() - 7);
    setWeekStart(getWeekStart(newWeekStart));
  };

  const handleNextWeek = () => {
    const newWeekStart = new Date(weekStart);
    newWeekStart.setDate(weekStart.getDate() + 7);
    setWeekStart(getWeekStart(newWeekStart));
  };

  return (
    <div className={className}>
      <table className="min-w-full bg-white">
        <thead className="bg-white text-black">
          <tr>
            <th className="w-20 py-3 px-4 flex uppercase gap-1  !text-xs  min-w-40">
              <p className="py-3 !font-medium">
                {isCurrentWeek(weekStart)
                  ? "This Week"
                  : "Week of " + weekStart.toLocaleDateString()}
              </p>
              <div className="flex my-2 gap-1 ">
                <button
                  onClick={handlePreviousWeek}
                  className="bg-primaryVariant  px-2 py- rounded"
                >
                  <span className="cursor-pointer text-primary ">
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </span>
                </button>{" "}
                <button
                  onClick={handleNextWeek}
                  className="bg-primaryVariant  px-2 py-1 rounded"
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
                {day.toLocaleDateString("en-US", {
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
              <td className="py-2 px-4 border  !h-full text-center ">{slot}</td>
              {weekDays.map((day, dayIndex) => {
                const eventsForDay = events.filter((event) =>
                  eventInSlot(event, day, slot)
                );

                return eventsForDay.length > 0 ? (
                  eventsForDay.map((event, eventIndex) => (
                    <td
                      key={eventIndex}
                      rowSpan={calculateColSpan(event.startTime, event.endTime)}
                      className={`  border    min-w-40  align-top h-12 `}
                    >
                      <div className="h-full ">{event.slot}</div>
                    </td>
                  ))
                ) : (
                  <td className="py-2 px-4 border border-xs text-center min-w-40 h-12"></td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

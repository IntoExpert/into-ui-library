import React, { useState } from "react";
import { UiElementProps } from "../../common";
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

interface MonthlyTableProps extends UiElementProps {
  events: Event[];
}

const getDaysArray = (start: Date, end: Date): Date[] => {
  const arr: Date[] = [];
  const dt = new Date(start);
  while (dt <= end) {
    arr.push(new Date(dt));
    dt.setDate(dt.getDate() + 1);
  }
  return arr;
};

const generateCalendar = (year: number, month: number): (Date | null)[][] => {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const weeks: (Date | null)[][] = [];
  let week: (Date | null)[] = new Array(firstDay).fill(null);

  for (let day = 1; day <= daysInMonth; day++) {
    week.push(new Date(year, month, day));
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  }
  if (week.length > 0) {
    weeks.push(week.concat(new Array(7 - week.length).fill(null)));
  }

  return weeks;
};

const filterEventsByDate = (events: Event[], day: Date) => {
  return events.filter(
    (event) =>
      new Date(event.startTime).getFullYear() === day.getFullYear() &&
      new Date(event.startTime).getMonth() === day.getMonth() &&
      new Date(event.startTime).getDate() === day.getDate()
  );
};

export const MonthlyView: React.FC<MonthlyTableProps> = ({
  events,
  className,
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePreviousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const weeks = generateCalendar(year, month);

  const monthEvents = events.filter((event) => {
    const eventStart = new Date(event.startTime);
    const eventEnd = new Date(event.endTime);
    return (
      (eventStart.getFullYear() === year && eventStart.getMonth() === month) ||
      (eventEnd.getFullYear() === year && eventEnd.getMonth() === month)
    );
  });

  const daysOfWeek = Array.from({ length: 7 }, (_, i) =>
    new Date(1970, 0, i + 4).toLocaleString("default", { weekday: "long" })
  );

  return (
    <div className={`${className} p-4`}>
      <div className="flex justify-between mb-4">
        <button
          onClick={handlePreviousMonth}
          className="px-4 py-2 bg-primaryVariant rounded"
        >
          <span className="cursor-pointer text-primary">
            <FontAwesomeIcon icon={faChevronLeft} />
          </span>
        </button>
        <h2 className="text-xl font-semibold text-primary">
          {currentDate.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </h2>
        <button
          onClick={handleNextMonth}
          className="px-4 py-2 bg-primaryVariant rounded"
        >
          <span className="cursor-pointer text-primary">
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </button>
      </div>
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr>
            {daysOfWeek.map((day) => (
              <th key={day} className="border border-gray-200 p-2 min-w-28">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, i) => (
            <tr key={i}>
              {week.map((day, j) => (
                <td
                  key={j}
                  className="border border-gray-200 p-2 h-24 align-top"
                >
                  {day && (
                    <>
                      <div className="text-sm font-semibold">
                        {day.getDate()}
                      </div>
                      {filterEventsByDate(monthEvents, day).map((event) => (
                        <div key={event.name} className="mt-2">
                          {event.slot}
                        </div>
                      ))}
                    </>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

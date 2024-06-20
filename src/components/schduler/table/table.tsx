import React from "react";
import { UiElementProps } from "../../common";

const getWeekStart = (date: any) => {
  const dateCopy = new Date(date);
  const day = dateCopy.getDay();
  const diff = dateCopy.getDate() - day + (day === 0 ? -6 : 1);
  return new Date(dateCopy.setDate(diff));
};

const generateWeekDays = (startOfWeek: any) => {
  const days = [];
  for (let i = 0; i < 7; i++) {
    const day = new Date(startOfWeek);
    day.setDate(day.getDate() + i);
    days.push(day);
  }
  return days;
};

const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 0; hour < 24; hour++) {
    slots.push(`${String(hour).padStart(2, "0")}:00`);
    slots.push(`${String(hour).padStart(2, "0")}:30`);
  }
  return slots;
};
const events = [
  {
    name: "Meeting with team",
    startTime: "2023-06-19T09:00",
    endTime: "2023-06-19T10:30",
  },
  {
    name: "Doctor's Appointment",
    startTime: "2023-06-20T11:00",
    endTime: "2023-06-20T11:30",
  },
  {
    name: "Lunch with Sarah",
    startTime: "2023-06-21T12:30",
    endTime: "2023-06-21T13:30",
  },
  // Add more events as needed
];
const getWeekNumber = (date: any) => {
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear = (date - Number(firstDayOfYear)) / 86400000;
  return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
};

const eventInSlot = (event: any, day: any, slot: any) => {
  const eventStart = new Date(event.startTime);
  const eventEnd = new Date(event.endTime);
  const slotStart = new Date(day);
  slotStart.setHours(
    parseInt(slot.substring(0, 2)),
    parseInt(slot.substring(3)),
    0
  );

  const slotEnd = new Date(slotStart);
  slotEnd.setMinutes(slotEnd.getMinutes() + 30);

  const isInSlot = eventStart < slotEnd && eventEnd > slotStart;
  console.log({ eventStart, eventEnd, slotStart, slotEnd, isInSlot }); // Debug log
  return isInSlot;
};

export interface TableProps extends UiElementProps {}

export const Table = ({ className }: TableProps) => {
  const [weekStart, setWeekStart] = React.useState(getWeekStart(new Date()));
  const weekDays = generateWeekDays(weekStart);
  const timeSlots = generateTimeSlots();

  const handlePrevWeek = () => {
    const newWeekStart = new Date(weekStart);
    newWeekStart.setDate(newWeekStart.getDate() - 7);
    setWeekStart(newWeekStart);
  };

  const handleNextWeek = () => {
    const newWeekStart = new Date(weekStart);
    newWeekStart.setDate(newWeekStart.getDate() + 7);
    setWeekStart(newWeekStart);
  };
  const isThisWeek = (date: any) => {
    const today = new Date();
    const todayStart = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );
    const todayDayOfWeek = today.getDay();

    // Start of this week
    const startOfThisWeek = new Date(todayStart);
    startOfThisWeek.setDate(todayStart.getDate() - todayDayOfWeek);

    // End of this week
    const endOfThisWeek = new Date(startOfThisWeek);
    endOfThisWeek.setDate(startOfThisWeek.getDate() + 7);

    return date >= startOfThisWeek && date < endOfThisWeek;
  };
  const weekNumber = getWeekNumber(weekStart);
  const weekLabel = isThisWeek(weekStart) ? "This Week" : `Week ${weekNumber}`;

  return (
    <div>
      <table className={`${className}`}>
        <div className="flex  ">
          <h5 className="text-sm  my-auto  font-semibold">{weekLabel}</h5>
          <th className="my-auto p-2">
            <button
              className="px-2 mr-1 py-1 bg-primaryVariant text-primary font-semibold rounded hover:bg-gray-300"
              onClick={handlePrevWeek}
            >
              &lt;
            </button>
            <button
              className="px-2 py-1 bg-primaryVariant text-primary rounded hover:bg-gray-300"
              onClick={handleNextWeek}
            >
              &gt;
            </button>
          </th>
          <thead>
            <tr>
              {weekDays.map((day) => (
                <th
                  key={day.toISOString()}
                  className="p-3  text-black text-center border-b   text-sm "
                >
                  {new Intl.DateTimeFormat("en-US", {
                    weekday: "short",
                    month: "numeric",
                    day: "numeric",
                  }).format(day)}
                </th>
              ))}
            </tr>
          </thead>
        </div>
        <tbody>
          {timeSlots.map((slot) => (
            <tr key={slot}>
              {weekDays.map((day) => {
                const slotEvents = events.filter((event) =>
                  eventInSlot(event, day, slot)
                );
                console.log(day, slot, slotEvents); // Debug log
                return (
                  <td
                    key={day.toISOString() + slot}
                    style={{
                      backgroundColor:
                        slotEvents.length > 0 ? "#ffcccb" : "white",
                    }}
                  >
                    {slotEvents.map((event) => (
                      <div key={event.name}>{event.name}</div>
                    ))}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

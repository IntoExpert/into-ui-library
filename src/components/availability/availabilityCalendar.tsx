import { TabProps, Tabs } from "../tabs";
import { Button, IconButton, IconButtonProps } from "../button";
import { UiElementProps } from "../common";
import { LeftArrowIcon } from "../icons";
import { useCallback, useMemo } from "react";
import { DaysAvailability } from "./daysAvailability";
import { DayAvailability } from "./moduleAvailabity/availability/tutorsAvailability";

export interface AvailabilityCalendarProps extends UiElementProps {
  dayAvailability: DayAvailability[];

  noSwipe?: string;
  noSlots?: string;
  todayTitle?: string;
  tomorrowTitle?: string;
  backToThisWeekLocal?: string;
  isInFirstWeek?: boolean;
  bookedTimes: { startTime: Date; endTime: Date }[];
  handleNextWeek: () => void;
  handlePrevWeek: () => void;

  backToThisWeek: () => void;
}

export const AvailabilityCalendar = ({
  backToThisWeekLocal,

  noSwipe = "no Swipe",
  noSlots = "no Slots",
  todayTitle: today = "today",
  tomorrowTitle: tomorrow = "tomorrow",
  dayAvailability,
  isInFirstWeek,
  bookedTimes,
  handleNextWeek,
  handlePrevWeek,
  backToThisWeek,
}: AvailabilityCalendarProps) => {
  const nowDate = useMemo(() => {
    return new Date();
  }, []);

  const tomorrowDate = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 1);

    return date;
  }, []);

  const tabs: TabProps[] = useMemo(
    () =>
      dayAvailability.map<TabProps>((a) => ({
        className: "text-[0.5rem] sm:text-xs",
        title:
          a.date.getDate() === nowDate.getDate() && isInFirstWeek
            ? today
            : a.date.getDate() === tomorrowDate.getDate() && isInFirstWeek
            ? tomorrow
            : a.date.toLocaleDateString("en", {
                weekday: "short",
                month: "short",
                day: "numeric",
              }),
        element: (
          <DaysAvailability
            availabilities={a.availabilities}
            bookedTimes={bookedTimes}
            noSlots={noSlots}
            noSwipeTitle={noSwipe}
          />
        ),
      })),
    [
      isInFirstWeek,
      dayAvailability,
      nowDate,
      tomorrowDate,
      noSlots,
      noSwipe,
      bookedTimes,
      today,
      tomorrow,
    ]
  );

  const AvailabilityIconButton = useCallback(
    ({ icon, className = "", ...props }: IconButtonProps) => (
      <IconButton
        className={`${className} w-5 h-5 !bg-gray-100 !rounded disabled:opacity-50`}
        icon={icon}
        {...props}
      />
    ),
    []
  );

  return (
    <article
      className={`flex flex-col md:flex-row items-start justify-between h-80 md:h-72`}
    >
      <Tabs
        className={`order-1 md:order-0 mx-auto flex-1`}
        tabsContainerClassName={`justify-center md:justify-start`}
        tabs={tabs!}
        activeTabIndex={0}
      />

      <div
        className={`order-0 md:order-1 inline-flex md:flex-col items-center`}
      >
        <div className={`inline-flex gap-2`}>
          <AvailabilityIconButton
            onClick={handlePrevWeek}
            icon={<LeftArrowIcon className={`fill-primary`} />}
          />
          <AvailabilityIconButton
            className={`rotate-180`}
            onClick={handleNextWeek}
            icon={<LeftArrowIcon className={`fill-primary`} />}
          />
        </div>
        <Button onClick={backToThisWeek}>{backToThisWeekLocal}</Button>
      </div>
    </article>
  );
};

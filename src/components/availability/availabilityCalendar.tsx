import { TabProps, Tabs } from "../tabs";
import { Button, IconButton, IconButtonProps } from "../button";
import { UiElementProps } from "../common";
import { LeftArrowIcon } from "../icons";
import { useCallback, useMemo, useState } from "react";
import { DaysAvailability } from "./daysAvailability";
import { TutorsWeeklyAvailability } from "../../core/domain/availability/tutorsAvailability";

export interface AvailabilityCalendarProps extends UiElementProps {
  availability: TutorsWeeklyAvailability;
  tabs?: TabProps[];
  noSwipe?: string;
  noSlots?: string;
  today?: string;
  tomorrow?: string;
  backToThisWeekLocal?: string;
}

export const AvailabilityCalendar = ({
  backToThisWeekLocal,
  availability,
  noSwipe = "",
  noSlots = "",
  today = "",
  tomorrow = "",
}: AvailabilityCalendarProps) => {
  const [tutorAvailability, setTutorAvailability] = useState(availability);

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
      tutorAvailability.daysAvailability.map<TabProps>((a) => ({
        className: "text-[0.5rem] sm:text-xs",
        title:
          a.date.getDate() === nowDate.getDate() &&
          tutorAvailability.isInFirstWeek
            ? today
            : a.date.getDate() === tomorrowDate.getDate() &&
              tutorAvailability.isInFirstWeek
            ? tomorrow
            : a.date.toLocaleDateString("en", {
                weekday: "short",
                month: "short",
                day: "numeric",
              }),
        element: (
          <DaysAvailability
            availabilities={a.availabilities}
            bookedTimes={tutorAvailability.bookedTimes}
            noSlots={noSlots}
            noSwipe={noSwipe}
          />
        ),
      })),
    [
      tutorAvailability,
      nowDate,
      tomorrowDate,
      noSlots,
      noSwipe,
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

  const handleNextWeek = useCallback(() => {
    tutorAvailability.nextWeek();
    const tutorAvailabilityCopy =
      TutorsWeeklyAvailability.createFromInstance(tutorAvailability);

    setTutorAvailability(tutorAvailabilityCopy);
  }, [tutorAvailability]);

  const handlePrevWeek = useCallback(() => {
    tutorAvailability.prevWeek();
    const tutorAvailabilityCopy =
      TutorsWeeklyAvailability.createFromInstance(tutorAvailability);

    setTutorAvailability(tutorAvailabilityCopy);
  }, [tutorAvailability]);

  const backToThisWeek = useCallback(() => {
    tutorAvailability.resetWeek();
    const tutorAvailabilityCopy =
      TutorsWeeklyAvailability.createFromInstance(tutorAvailability);

    setTutorAvailability(tutorAvailabilityCopy);
  }, [tutorAvailability]);

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

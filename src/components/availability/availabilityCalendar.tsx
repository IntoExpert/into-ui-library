import { useMemo, useState } from "react";
import { TabProps, Tabs } from "../tabs";
import { Button, IconButtonProps } from "../button";
import { UiElementProps } from "../common";
import { LeftArrowIcon } from "../icons";

export interface AvailabilityCalendarProps extends UiElementProps {
  availability: any;
  tabs: TabProps[];
  AvailabilityIconButton: ({
    icon,
    className,
    ...props
  }: IconButtonProps) => JSX.Element;
  handleNextWeek: () => void;
  handlePrevWeek: () => void;
  backToThisWeek: () => void;
  backToThisWeekLocal: string;
}

export const AvailabilityCalendar = ({
  availability,
  tabs,
  AvailabilityIconButton,
  handleNextWeek,
  handlePrevWeek,
  backToThisWeek,
  backToThisWeekLocal,
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

  return (
    <article
      className={`flex flex-col md:flex-row items-start justify-between h-80 md:h-72`}
    >
      <Tabs
        className={`order-1 md:order-0 mx-auto flex-1`}
        tabsContainerClassName={`justify-center md:justify-start`}
        tabs={tabs}
        activeTabIndex={0}
      />

      <div
        className={`order-0 md:order-1 inline-flex md:flex-col items-center`}
      >
        <div className={`inline-flex gap-2`}>
          <AvailabilityIconButton
            onClick={handlePrevWeek}
            disabled={!tutorAvailability.canGoPrev}
            icon={<LeftArrowIcon className={`fill-primary`} />}
          />
          <AvailabilityIconButton
            className={`rotate-180`}
            onClick={handleNextWeek}
            disabled={!tutorAvailability.canGoNext}
            icon={<LeftArrowIcon className={`fill-primary`} />}
          />
        </div>
        <Button onClick={backToThisWeek}>{backToThisWeekLocal}</Button>
      </div>
    </article>
  );
};

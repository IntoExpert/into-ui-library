import { useMemo } from "react";
import { UiElementProps } from "../common";
import { SadFaceIcon } from "../icons";
import { CalculatedDay } from "./moduleAvailabity/calendar/calculatedDay";

export interface DaysAvailabilityProps extends UiElementProps {
  availabilities: CalculatedDay;
  bookedTimes: { startTime: Date; endTime: Date }[];
  noSwipeTitle: string;
  noSlots: string;
}

export const DaysAvailability = ({
  availabilities,
  bookedTimes,
  className = "",
  noSwipeTitle: noSwipe,
  noSlots,
}: DaysAvailabilityProps) => {
  const slots = useMemo(
    () => availabilities.eventsDividedIntoSlotsOfMinutes(bookedTimes),
    [availabilities, bookedTimes]
  );

  return (
    <div className={`h-52 overflow-auto ${className}`}>
      {slots.length ? (
        <div className={`flex gap-2 flex-wrap`}>
          {slots.map((a) => (
            <div
              key={a.startTime}
              className={`rounded-xl px-1 py-2 cursor-default text-[0.7rem] flex justify-center
                         bg-primary text-surface w-32`}
            >
              <span className={`whitespace-nowrap`}>{a.startTime}</span>
              <span className={`mx-1`}> - </span>
              <span className={`whitespace-nowrap`}>{a.endTime}</span>
            </div>
          ))}
        </div>
      ) : (
        <div
          className={`flex flex-col justify-center h-full items-center space-y-1`}
        >
          <SadFaceIcon className={`fill-learner`} />
          <p className={`text-center`}>
            <span className={`text-gray-700 font-semibold block`}>
              {noSlots}
            </span>
            <span className="block">{noSwipe}</span>
          </p>
        </div>
      )}
    </div>
  );
};

import { ReactElement, useEffect, useMemo, useState } from "react";

import "react-circular-progressbar/dist/styles.css";
import { UiElementProps } from "../common";
import { DateInterval, durationBetweenTowDates } from "./dateTime/time";
export interface TimeCountdownProps extends UiElementProps {
  /**
   * The date and time to count down to.
   */
  date?: Date;

  /**
   * The interval in milliseconds at which to update the countdown.
   *
   * @default 1000
   */
  intervale?: number;

  /**
   * A callback function that is called when the countdown ends.
   */
  onCountDownEnd?: () => void;

  /**
   * The threshold in milliseconds before the countdown ends at which to call the onCountDownEnd callback.
   *
   * @default 0
   */
  countDownThresholdInMs?: number;

  /**
   * A function that renders the countdown timer.
   *
   * @param interval The current interval between the current time and the countdown date.
   * @returns A React element to be rendered.
   */
  renderer?: (interval: DateInterval) => ReactElement;
}
export const TimeCountdown = ({
  date = new Date(),
  intervale = 1000,
  onCountDownEnd,
  countDownThresholdInMs = 0,
  renderer,
  className = "",
}: TimeCountdownProps) => {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    if (date.getTime() <= Date.now()) {
      onCountDownEnd?.();
      return;
    }

    const intervalRef = setInterval(() => {
      setValue((prev) => {
        const timeStamp = prev.getTime();
        if (timeStamp >= date.getTime()) {
          clearInterval(intervalRef);
        }

        if (date.getTime() - timeStamp <= countDownThresholdInMs) {
          onCountDownEnd?.();
        }

        return new Date();
      });

      return () => {
        clearInterval(intervalRef);
      };
    }, intervale);
  }, [intervale, onCountDownEnd, date, countDownThresholdInMs]);

  const interval = useMemo(
    () => durationBetweenTowDates(value, date),
    [value, date]
  );

  return renderer ? (
    renderer(interval)
  ) : (
    <span
      className={`text-white font-bold
    whitespace-nowrap ${className}`}
    >
      <>
        {interval.hours
          ? `${interval.hours.toString().padStart(2, "0")} : `
          : ""}
        {`${interval.minutes.toFixed().padStart(2, "0")} : `}
        {interval.seconds.toFixed().padStart(2, "0")}
      </>
    </span>
  );
};

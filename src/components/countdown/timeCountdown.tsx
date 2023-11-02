
import { ReactElement, useEffect, useMemo, useState } from "react";

import 'react-circular-progressbar/dist/styles.css';
import { UiElementProps } from "../common";
import { DateInterval, durationBetweenTowDates } from "./dateTime/time";


export interface TimeCountdownProps extends UiElementProps {
  date?: Date;
  intervale?: number;
  onCountDownEnd?: () => void;
  countDownThresholdInMs?: number;
  renderer?: (interval: DateInterval) => ReactElement
}

export const TimeCountdown = ({ date = new Date(), intervale = 1000, onCountDownEnd,
  countDownThresholdInMs = 0, renderer, className = '' }: TimeCountdownProps) => {

  const [value, setValue] = useState(new Date());

  useEffect(() => {

    if (date.getTime() <= Date.now()) {
      onCountDownEnd?.();
      return;
    }

    const intervalRef = setInterval(() => {
      setValue(prev => {
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
      }
    }, intervale);

  }, [intervale, onCountDownEnd, date, countDownThresholdInMs]);

  const interval = useMemo(() => durationBetweenTowDates(value, date), [value, date]);

  return renderer ? renderer(interval) : <span
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
}
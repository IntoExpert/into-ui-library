import { useCallback } from "react";
import { TimeCountdown, TimeCountdownProps } from "./timeCountdown";

export interface AnimatedCountdownProps extends TimeCountdownProps {
  boxClassName?: string;
}

export const AnimatedCountdown = ({
  boxClassName = "",
  className = "",
  ...props
}: AnimatedCountdownProps) => {
  const CountdownBox = useCallback(
    ({ title, value }: { title: string; value: number }) => {
      return (
        <div
          className={`flex flex-col justify-evenly items-center min-w-0
            flex-1 bg-gradient-to-b from-primary to-blue-400 px-2 py-2 rounded-lg text-surface ${boxClassName}`}
        >
          <p className={`font-bold`}>{value.toString().padStart(2, "0")}</p>
          <h6 className={`text-[0.6rem] mt-1`}>{title}</h6>
        </div>
      );
    },
    [boxClassName]
  );

  return (
    <TimeCountdown
      {...props}
      renderer={(interval) => {
        return (
          <article className={`flex gap-2 ${className}`}>
            <CountdownBox title={"Days"} value={interval.days} />
            <CountdownBox title={"Hours"} value={interval.hours} />
            <CountdownBox title={"Minutes"} value={interval.minutes} />
            <CountdownBox title={"Seconds"} value={interval.seconds} />
          </article>
        );
      }}
    />
  );
};

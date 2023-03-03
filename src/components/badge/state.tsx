import { ReactElement } from "react";
import { UiElementProps } from "../common";

export interface stateProps extends UiElementProps {
  children?: ReactElement;
}

export const State = ({ children, className }: stateProps): ReactElement => {
  return (
    <div
      className={`border border-black border-1 rounded-md inline-block ${
        className ?? ""
      }`}
    >
      <div className="">
        <strong>{children}</strong>
      </div>
    </div>
  );
};

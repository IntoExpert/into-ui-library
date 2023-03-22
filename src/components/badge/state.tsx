import { ReactElement } from "react";
import { UiElementProps } from "../common";

export interface StateProps extends UiElementProps {
  children?: ReactElement;
}

export const State = ({ children, className }: StateProps): ReactElement => {
  return (
    <div
      className={`border rounded-md inline-block ${className ?? ""
        }`}
    >
      <div className="w-16 text-center">
        <strong>{children}</strong>
      </div>
    </div>
  );
};

import { ReactElement } from "react";
import { Button, ButtonProps } from "../button";

export interface FederatedButtonsProps extends ButtonProps {
  icon?: ReactElement;
}

export const FederatedButton = (props: FederatedButtonsProps) => {
  return (
    <div className="relative ">
      <Button {...props}>
        <div className=" absolute top-4 left-5 ">{props.icon}</div>
      </Button>
    </div>
  );
};

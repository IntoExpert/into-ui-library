import { InputFieldProps } from "../field/field";
import { InputField } from "../field";
import { ReactElement } from "react";

export interface DateInputProps extends InputFieldProps {
  icon?: ReactElement;
  iconClassName?: string;
}

export const DateInput = (props: DateInputProps) => {
  return (
    <div className=" flex relative ">
      <InputField
        placeholder={props.placeholder}
        type={`date`}
        className="placeholder: pb-[2px] rounded-lg w-96 text-sm z-10  "
      />
      <div className={`fill-yellow-500 absolute  ${props.icon ?? " "}`}>
        {props.icon}
      </div>
    </div>
  );
};

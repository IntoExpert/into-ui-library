import { InputFieldProps } from "../field/field";
import { InputField } from "../field";
import { EmailIcon } from "../../../icons";
import { JsxElement } from "typescript";
import { ReactElement } from "react";
export interface AuthEmailInputProps extends InputFieldProps {
  icon?: ReactElement;
  iconClassName?: string;
}

export const AuthEmailInput = (props: AuthEmailInputProps) => {
  return (
    <div className=" relative">
      <InputField
        placeholder={props.placeholder}
        type={props.type}
        className="placeholder: pb-[2px] rounded-lg w-96 pl-12 text-sm  "
      />
      <div
        className={`fill-yellow-500 absolute top-5 px-4 ${props.icon ?? " "}`}
      >
        {props.icon}
      </div>
    </div>
  );
};

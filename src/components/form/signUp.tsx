import { ReactElement } from "react";
import { Button } from "../button";
import {
  FederatedButton,
  FederatedButtonsProps,
} from "../button/federatedButtons/federatedButtons";
import { UiElementProps } from "../common";
import { Avatar, AvatarProps } from "../image";
import {
  DropDownInput,
  DropDownInputProps,
} from "./input/authInput/dropdownInput";
import { AuthInput, AuthInputProps } from "./input/authInput/emailInput";

export interface SignUpFormProps extends UiElementProps {
  avatar?: AvatarProps;
  topChildren?: string;
  federatedButton?: FederatedButtonsProps[];
  bottomChildren?: string;
  inputs?: AuthInputProps[];
  policiesTandC?: ReactElement;
  bottomChild?: ReactElement;
  dropdownMenu?: DropDownInputProps;
}

export const SignUpForm = (props: SignUpFormProps) => {
  return (
    <div className={`${props.className ?? " "} py-10 `}>
      <div className="bg-white rounded-lg  ">
        <div className=" bottom-14 relative  -mb-5 ">
          <Avatar {...props.avatar} />
        </div>

        <div className=" flex justify-center ">
          <p className=" text-md">{props.topChildren}</p>
        </div>
        <div className="flex justify-center pt-4 ">
          {props.federatedButton?.map((items) => (
            <div className="px-2 ">
              <FederatedButton {...items} />
            </div>
          ))}
        </div>
        <div className=" flex justify-center pt-5">
          <p className=" text-md">{props.bottomChildren}</p>
        </div>

        <div className="flex flex-wrap justify-center">
          {props.inputs?.map((items) => (
            <div className="px-5 py-2">
              <AuthInput {...items} />
            </div>
          ))}
          <div className=" px-5 py-2">
            <DropDownInput className=" " {...props.dropdownMenu} />
          </div>
        </div>
        <div className="flex justify-center text-center text-sm pt-5">
          {props.policiesTandC}
        </div>
        <div className="flex justify-center pt-5 ">
          <Button
            children={<strong className="text-[15px]">Sign Up</strong>}
            className={`w-64 h-14`}
          />
        </div>
        <div className="flex justify-center py-5 text-sm">
          {props.bottomChild}
        </div>
      </div>
    </div>
  );
};

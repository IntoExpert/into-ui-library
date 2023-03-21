import { UiElementProps } from "../../../common";
import { SelectProps, Select } from "../select";
export interface DropDownInputProps extends UiElementProps {
  dropdownMenu?: {
    value?: string;
    label?: string;
  }[];
  placeholder?: string;
}

export const DropDownInput = (props: DropDownInputProps) => {
  return (
    <div
      className={` w-96 bg-secondary bg-opacity-10${props.className ?? " "} `}
    >
      <Select
        className=""
        options={props.dropdownMenu}
        placeholder={props.placeholder}
      />
    </div>
  );
};

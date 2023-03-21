import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DropDownInput } from "../../components/form/input/authInput/dropdownInput";
export default {
  title: "Form/Dropdown Inputs",
  component: DropDownInput,
} as ComponentMeta<typeof DropDownInput>;

const Template: ComponentStory<typeof DropDownInput> = (args) => (
  <DropDownInput {...args} />
);

export const DefaultState = Template.bind({});
DefaultState.args = {
  className: " ",
  dropdownMenu: [
    {
      value: "first",
      label: "first",
    },
    {
      value: "second",
      label: "second",
    },
    {
      value: "third",
      label: "third",
    },
    {
      value: "fourth",
      label: "fourth",
    },
  ],
  placeholder: "Where Did You Here About Us?",
};

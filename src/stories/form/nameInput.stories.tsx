import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../index.css";
import { DateInput } from "../../components/form/input/authInput/dateInput";
import { CalenderIcon, UserFilledIcon } from "../../components";
export default {
  title: "Form/name Inputs",
  component: DateInput,
} as ComponentMeta<typeof DateInput>;

const Template: ComponentStory<typeof DateInput> = (args) => (
  <DateInput {...args} />
);

export const DefaultState = Template.bind({});
DefaultState.args = {
  icon: <CalenderIcon />,
  placeholder: "First Name",
};

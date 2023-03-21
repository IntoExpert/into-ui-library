import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../index.css";
import { AuthInput } from "../../components/form/input/authInput/emailInput";
import { EmailIcon } from "../../components";
import { UserSolidIcon } from "../../components";
import { UserFilledIcon } from "../../components";

export default {
  title: "Form/Auth Inputs",
  component: AuthInput,
} as ComponentMeta<typeof AuthInput>;

const Template: ComponentStory<typeof AuthInput> = (args) => (
  <AuthInput {...args} />
);

export const DefaultState = Template.bind({});
DefaultState.args = {
  icon: <UserFilledIcon />,
  placeholder: "First Name",
  type: "text",
};

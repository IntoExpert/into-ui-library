import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../index.css";
import { AuthEmailInput } from "../../components/form/input/authInput/emailInput";
import { EmailIcon } from "../../components";
import { UserSolidIcon } from "../../components";
import { UserFilledIcon } from "../../components";

export default {
  title: "Form/Auth Inputs",
  component: AuthEmailInput,
} as ComponentMeta<typeof AuthEmailInput>;

const Template: ComponentStory<typeof AuthEmailInput> = (args) => (
  <AuthEmailInput {...args} />
);

export const DefaultState = Template.bind({});
DefaultState.args = {
  icon: <UserFilledIcon />,
  placeholder: "First Name",
  type: "text",
};

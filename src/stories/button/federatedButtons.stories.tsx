import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FacebookIcon } from "../../components";

import { FederatedButton } from "../../components/button/federatedButtons/federatedButtons";

export default {
  title: "Buttons/Federated button",
  component: FederatedButton,
} as ComponentMeta<typeof FederatedButton>;

const Template: ComponentStory<typeof FederatedButton> = (args) => (
  <FederatedButton {...args} />
);

export const defaultState = Template.bind({});
defaultState.args = {
  className: " w-14 h-14 ",
  icon: <FacebookIcon className="" />,
  onClick: () => {
    alert("clicked");
  },
};

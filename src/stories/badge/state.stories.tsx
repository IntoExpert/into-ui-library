import { ComponentStory, ComponentMeta } from "@storybook/react";
import { State } from "../../components/badge/state";
export default {
  title: "Badge/ state",
  component: State,
} as ComponentMeta<typeof State>;

const Template: ComponentStory<typeof State> = (args) => <State {...args} />;

export const defaultState = Template.bind({});
defaultState.args = {
  children: <p>Pending</p>,
};

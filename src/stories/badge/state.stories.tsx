import { State } from "../../components/badge/state";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Badge/state",
  component: State,
} as ComponentMeta<typeof State>;

const Template: ComponentStory<typeof State> = (args) => <State {...args} />;

export const defaultState = Template.bind({});
defaultState.args = {
  children: <h2 className={`px-5 py-1`}>pending</h2>,
};

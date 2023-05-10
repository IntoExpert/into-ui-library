import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Badge } from "../../components/badge/badge";

export default {
  title: 'Badge/badges',
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const defaultState = Template.bind({});
defaultState.args = {
  children: <div>$1,400</div>,
};
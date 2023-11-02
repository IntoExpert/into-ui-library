import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Badge } from "../../components/badge/badge";
import { AnimatedCountdown } from "../../components/countdown/AnimatedCountdown";

export default {
  title: "Animated Countdown",
  component: AnimatedCountdown,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof AnimatedCountdown> = (args) => (
  <AnimatedCountdown {...args} />
);

export const defaultState = Template.bind({});

defaultState.args = {
  date: new Date("2023-12-02T11:51:38.386Z"),
};

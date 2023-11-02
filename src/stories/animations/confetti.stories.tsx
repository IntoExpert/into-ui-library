import { AnimatedConfetti } from "../../components/animations/confetti/animatedConfetti";
import "../../index.css";
import { ComponentStory } from "@storybook/react";

export default {
  title: "Animations/Animated Confetti",
  component: AnimatedConfetti,
};

const Template: ComponentStory<typeof AnimatedConfetti> = (args) => (
  <AnimatedConfetti />
);

export const defaultState = Template.bind({});

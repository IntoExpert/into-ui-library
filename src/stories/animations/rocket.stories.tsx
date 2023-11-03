import { AnimatedRocket } from "../../components/animations/rocket/animatedRocket";
import "../../index.css";
import { ComponentStory } from "@storybook/react";

export default {
  title: "Animations/Rocket",
  component: AnimatedRocket,
};

const Template: ComponentStory<typeof AnimatedRocket> = (args) => (
  <AnimatedRocket />
);

export const defaultState = Template.bind({});

import { LoadingBouncingBall } from "../../components/animations/loadingBoucingBall/loadingBoucingBall";
import "../../index.css";
import { ComponentStory } from "@storybook/react";

export default {
  title: "Animations/Loading Bouncing Ball",
  component: LoadingBouncingBall,
};

const Template: ComponentStory<typeof LoadingBouncingBall> = (args) => (
  <LoadingBouncingBall />
);

export const defaultState = Template.bind({});

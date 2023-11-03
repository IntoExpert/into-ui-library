import { NoNotificationAnimation } from "../../components/animations/noNotifications/noNotificationAnimation";
import "../../index.css";
import { ComponentStory } from "@storybook/react";

export default {
  title: "Animations/No Notification",
  component: NoNotificationAnimation,
};

const Template: ComponentStory<typeof NoNotificationAnimation> = (args) => (
  <NoNotificationAnimation />
);

export const defaultState = Template.bind({});

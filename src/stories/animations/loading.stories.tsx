import { CommingSoon } from "../../components/animations/commingSoon/commingSoon";
import "../../index.css";
import { ComponentStory } from "@storybook/react";

export default {
  title: "Animations/loading",
  component: CommingSoon,
};

const Template: ComponentStory<typeof CommingSoon> = (args) => <CommingSoon />;

export const defaultState = Template.bind({});

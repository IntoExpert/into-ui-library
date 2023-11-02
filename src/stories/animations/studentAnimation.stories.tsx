import { AnimatedStudents } from "../../components/animations/students/animatedStudents";
import "../../index.css";
import { ComponentStory } from "@storybook/react";

export default {
  title: "Animations/Students",
  component: AnimatedStudents,
};

const Template: ComponentStory<typeof AnimatedStudents> = (args) => (
  <AnimatedStudents />
);

export const defaultState = Template.bind({});

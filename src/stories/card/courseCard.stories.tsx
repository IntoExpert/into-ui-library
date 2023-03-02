import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CourseCard } from "../../components/card/courseCard";

export default {
  title: "Cards/Course card",
  component: CourseCard,
} as ComponentMeta<typeof CourseCard>;

const Template: ComponentStory<typeof CourseCard> = (args) => (
  <CourseCard {...args} />
);

export const defaultState = Template.bind({});
defaultState.args = {
  className: "w-64",
  media: {
    src: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    alt: "Books",
  },

  children: <h2 className={`p-5`}>Hi!</h2>,
  avatar: {
    alt: "Face portrait",
    src: "https://cdn.dribbble.com/users/544003/screenshots/18063915/media/13befc9277da37247dad63ddb46c235f.jpg?compress=1&resize=400x300",
    label: {
      name: "Face portrait",
    },
  },
  state: {
    children: <h2 className={`px-4 py-1`}>pending</h2>,
  },
};

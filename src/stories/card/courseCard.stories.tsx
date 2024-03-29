import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MediaCard } from "../../components/card/mediaCard";
import { Avatar } from "../../components";
import { DeleteIcon, EditIcon } from "../../components";
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
  className: "w-80 hover:scale-105",
  children: <h2 className={`p-5`}>Hi!</h2>,
  mediaCard: {
    className: "w-64",
    media: {
      src: "https://images.unsplash.com/photo-1683009427619-a1a11b799e05?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Books",
    },

    badge: {
      children: <span>$1,400</span>,
    },
    dropdown: {
      icon: (
        <Avatar src="https://cdn.dribbble.com/users/544003/screenshots/18063915/media/13befc9277da37247dad63ddb46c235f.jpg?compress=1&resize=400x300" />
      ),
      menu: {
        className: " top-8",
        items: [
          {
            icon: <DeleteIcon />,
            link: {
              children: "Delete",
              className: "flex",
            },
          },
          {
            icon: <EditIcon />,
            link: {
              children: "Edit",
              className: "flex",
            },
          },
        ],
      },
    },
  },
  avatar: {
    alt: "Face portrait",
    src: "https://cdn.dribbble.com/users/544003/screenshots/18063915/media/13befc9277da37247dad63ddb46c235f.jpg?compress=1&resize=400x300",
    label: {
      name: "Face portrait",
      classname: "!text-black",
    },
  },
  state: {
    children: <p>Pending</p>,
  },
  title: (
    <h1>
      <strong>Financial Acounting</strong>
    </h1>
  ),
  description: (
    <p>
      Lorem ipsum dolor sit amet, enim ad minim consect etur lorem ipsum dolor
    </p>
  ),
  duration: <p>8 Weeks, 20 hrs.</p>,
  deadline: <p>Registra on deadline, 7 March</p>,
  rating: { value: 3, disabled: true },
  numberOfRatings: <p>(523 ratings)</p>,
  courseCardChildren: <div>hello</div>,
};

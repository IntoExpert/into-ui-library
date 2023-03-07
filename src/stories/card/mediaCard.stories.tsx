import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MediaCard } from "../../components/card/mediaCard";
import { Avatar } from "../../components";
import { DeleteIcon, EditIcon } from "../../components";

export default {
  title: "Cards/Media card",
  component: MediaCard,
} as ComponentMeta<typeof MediaCard>;

const Template: ComponentStory<typeof MediaCard> = (args) => (
  <MediaCard {...args} />
);

export const defaultState = Template.bind({});
defaultState.args = {
  className: "w-64",
  media: {
    src: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    alt: "Books",
  },
  children: <h2 className={`p-5`}>Hi!</h2>,
  badge: {
    children: "$1,400",
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
};
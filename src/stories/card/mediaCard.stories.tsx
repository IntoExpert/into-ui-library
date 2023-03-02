import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MediaCard } from "../../components/card/mediaCard";
import { Avatar } from "../../components";

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
    price: "$1,400",
    earlyBirdPrice: "$1,200",
  },
};




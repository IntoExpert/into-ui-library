import { SubjectCard } from "../../components/card/subjectCard";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Cards/Subject card",
  component: SubjectCard,
} as ComponentMeta<typeof SubjectCard>;

const Template: ComponentStory<typeof SubjectCard> = (args) => (
  <SubjectCard {...args} />
);

export const defaultState = Template.bind({});

defaultState.args = {
  className: "w-64",
  children: <h1>Mathmatecis</h1>,
  badge: {
    children: <span>$1,400</span>,
  },
  list: [
    {
      key: 0,
      title: "Curriculum",
      content: "American - Britch - Lebanese - French",
    },

    {
      key: 1,
      title: "Curriculum",
      content: "American - Britch - Lebanese - French",
    },
    {
      key: 2,
      title: "Curriculum",
      content: "American - Britch - Lebanese - French",
    },
  ],

  button: {
    className: " w-full",
    children: (
      <h2>
        {" "}
        <strong>Get Free Consultation</strong>
      </h2>
    ),
    onClick: () => {
      alert("clicked");
    },
    title: "Click here!",
  },
};

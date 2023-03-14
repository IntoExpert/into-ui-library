import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MediaCard } from "../../components/card/mediaCard";
import { SeveralSubjectCard } from "../../components/card/severalSubjectCard";

export default {
  title: "Cards/Several Subject card",
  component: MediaCard,
} as ComponentMeta<typeof SeveralSubjectCard>;

const Template: ComponentStory<typeof SeveralSubjectCard> = (args) => (
  <SeveralSubjectCard {...args} />
);

export const defaultState = Template.bind({});
defaultState.args = {
  className: "w-[600px] ",
  children: <div>Subjects</div>,
  subjects: [
    {
      name: "Mathematics",
      curriculum: "American - British - Lebanese - French",
      grade: "Grade One To Five - Grade Six To Nine",
      languages: "Arabic - English",
    },
    {
      name: "Physics",
      curriculum: "American - British - Lebanese - French",
      grade: "Grade One To Five - Grade Six To Nine",
      languages: "Arabic - English",
    },
    {
      name: "Chemistry",
      curriculum: "American - British - Lebanese - French",
      grade: "Grade One To Five - Grade Six To Nine",
      languages: "Arabic - English",
    },
  ],
};

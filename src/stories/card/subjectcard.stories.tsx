import { SubjectCard } from "../../components/card/subjectCrad";
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
    className: " ",
    children: "$1,400",
    price: "$1,500",
  },
  contentCurriculum: {
    curriculum: <p>Curriculum</p>,
    curriculumType: <p>American - Britch - Lebanese - French</p>,
  },
  contentGrade: {
    grade: <p>Grade</p>,
    gradeType: <p>Grade One To Five Grade Six To Nine</p>,
  },
  contentLanguage: {
    Language: <p>Language</p>,
    LanguageType: <p>Arabic - English</p>,
  },
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

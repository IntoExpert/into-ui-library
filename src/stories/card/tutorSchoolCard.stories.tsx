import { SubjectCard } from "../../components/card/subjectCard";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TutorSchoolCard } from "../../components/card/tutorSchoolCard";

export default {
  title: "Cards/School Tutor card",
  component: SubjectCard,
} as ComponentMeta<typeof TutorSchoolCard>;

const Template: ComponentStory<typeof TutorSchoolCard> = (args) => (
  <TutorSchoolCard {...args} />
);

export const defaultState = Template.bind({});

defaultState.args = {
  className: "w-64 mt-10",
  src: "https://cdn.dribbble.com/users/544003/screenshots/18063915/media/13befc9277da37247dad63ddb46c235f.jpg?compress=1&resize=400x300",
  name: "Motasem Ghozlan",
  status: "Pending",
  textColor: "text-secondary",
  bgClassName: "bg-secondary",
  id: "SR 9832315",
  branch: "Branch 01",
  subject: "Math",
  children: <>hello</>,
};



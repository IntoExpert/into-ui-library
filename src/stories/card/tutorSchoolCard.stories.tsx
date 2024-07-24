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
  className: "w-64",
  src: "https://cdn.dribbble.com/users/544003/screenshots/18063915/media/13befc9277da37247dad63ddb46c235f.jpg?compress=1&resize=400x300",
  name: "Hadi Hamza",
  status: "Pending",
  textColor: "text-secondary",
  bgClassName: "bg-secondary",
  id: "SR 9832315",
  branch: "Branch 01",
  subject: "Math",
  Button: <>hello</>,
};

// children: <h1>Mathmatecis</h1>,
// badge: {
//   children: <span>$1,400</span>,
// },
// list: [
//   {
//     key: 0,
//     title: "Curriculum",
//     content: "American - Britch - Lebanese - French",
//   },

//   {
//     key: 1,
//     title: "Curriculum",
//     content: "American - Britch - Lebanese - French",
//   },
//   {
//     key: 2,
//     title: "Curriculum",
//     content: "American - Britch - Lebanese - French",
//   },
// ],

// button: {
//   className: " w-full",
//   children: (
//     <h2>
//       {" "}
//       <strong>Get Free Consultation</strong>
//     </h2>
//   ),
//   onClick: () => {
//     alert("clicked");
//   },
//   title: "Click here!",
// },

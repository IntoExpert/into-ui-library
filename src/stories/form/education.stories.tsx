import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CheckMarkIcon } from "../../components";
import { Education } from "../../components/user/publicProfile";
export default {
  title: "Form/Education ",
  component: Education,
} as ComponentMeta<typeof Education>;

const Template: ComponentStory<typeof Education> = (args) => (
  <Education {...args} />
);
export const DefaultState = Template.bind({});

DefaultState.args = {
  className: "w-[550px]",
  title: {
    content: "Education",
  },
  body: [
    {
      universityName: "Hochschule Anhalt",
      degree: "Master of Arts - Integrated Design",
      location: "Dessau, Germany",
      icon: <CheckMarkIcon className="fill-primary" />,
      iconDescription: "Verfied",
    },

    {
      universityName: "Lebanese International University",
      degree: "Bachelor of Science - Graphic Design",
      location: "Beirut, Lebanon",
      icon: <CheckMarkIcon className="fill-primary" />,
      iconDescription: "Verfied",
    },
  ],
};

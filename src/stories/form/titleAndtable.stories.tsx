import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CheckMarkIcon, VerifiedIcon } from "../../components";
import { TitleAndTable } from "../../components/user/titleDescription/rowTable/titleDescriptionTable";
export default {
  title: "Form/title and table",
  component: TitleAndTable,
} as ComponentMeta<typeof TitleAndTable>;

const Template: ComponentStory<typeof TitleAndTable> = (args) => (
  <TitleAndTable {...args} />
);
export const DefaultState = Template.bind({});

DefaultState.args = {
  className: "w-[550px]",
  title: {
    content: "Education",
  },
  numberOfRows: 2,
  body: [
    {
      title: "Hochschule Anhalt",
      subTitle: "Master of Arts - Integrated Design",
      description: "Dessau, Germany",
      icon: <CheckMarkIcon className="fill-primary" />,
      iconDescription: "Verfied",
    },

    {
      title: "Lebanese International University",
      subTitle: "Bachelor of Science - Graphic Design",
      description: "Beirut, Lebanon",
      icon: <CheckMarkIcon className="fill-primary" />,
      iconDescription: "Verfied",
    },
  ],
};

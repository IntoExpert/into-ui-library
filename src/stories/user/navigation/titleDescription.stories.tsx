import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TitleAndDiscription } from "../../../components/user/titleDescription/titleDescription";

export default {
  title: "User/Title Discription",
  component: TitleAndDiscription,
} as ComponentMeta<typeof TitleAndDiscription>;

const Template: ComponentStory<typeof TitleAndDiscription> = (args) => (
  <TitleAndDiscription {...args} />
);

export const userNavigation = Template.bind({});
userNavigation.args = {
  className: "w-[550px]",
  title: {
    content: "Biograpghy",
  },
  discription: {
    content:
      "Madison Blackstone is a director of brand marke ng, with experience managing global teams and mul -million-dollar campaigns Her background in brand strategy, visual design, and account management inform her mindful but compe  ve approach.Madison rm her mindful but compe  ve appr background in brand strategy, visual design, and account management inform her managin mindful but compe  ve approach.Madison Blackstone oach.Madison Blackstone is a director of brand marke ng, with experience managing global teams and mul -million-dollar campaigns. Heris a director of brand marke ng, with experience managing global teams and mul -million-dollar campaigns.",
  },
};

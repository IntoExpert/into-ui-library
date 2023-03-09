import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TitleAndDiscription } from "../../components/user/titleDescription/titleDescription";

export default {
  title: "Form/title and description",
  component: TitleAndDiscription,
} as ComponentMeta<typeof TitleAndDiscription>;

const Template: ComponentStory<typeof TitleAndDiscription> = (args) => (
  <TitleAndDiscription {...args} />
);

export const DefaultState = Template.bind({});
DefaultState.args = {
  className: "w-[550px]",
  title: {
    content: "Biography",
  },
  discription: {
    content:
      "Madison Blackstone is a director of brand marke ng, with experience managing global teams and mul -million-dollar campaigns Her background in brand strategy, visual design, and account management inform her mindful but compe  ve approach.Madison rm her mindful but compe  ve appr background in brand strategy, visual design, and account management inform her managin mindful but compe  ve approach.Madison Blackstone oach.Madison Blackstone is a director of brand marke ng, with experience managing global teams and mul -million-dollar campaigns. Heris a director of brand marke ng, with experience managing global teams and mul -million-dollar campaigns.",
  },
};

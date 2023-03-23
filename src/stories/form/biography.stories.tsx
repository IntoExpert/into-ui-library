import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CheckMarkIcon, VerifiedIcon } from "../../components";
import { Biography } from "../../components/user/publicProfile";
export default {
  title: "Form/Education ",
  component: Biography,
} as ComponentMeta<typeof Biography>;

const Template: ComponentStory<typeof Biography> = (args) => (
  <Biography {...args} />
);
export const DefaultState = Template.bind({});

DefaultState.args = {
  title: {
    content: "Biography",
  },
  discription: {
    content:
      "Madison Blackstone is a director of brand marke ng, with experience managing global teams and mul -million-dollar campaigns Her background in brand strategy, visual design, and account management inform her mindful but compe  ve approach.Madison rm her mindful but compe  ve appr background in brand strategy, visual design, and account management inform her managin mindful but compe  ve approach.Madison Blackstone oach.Madison Blackstone is a director of brand marke ng, with experience managing global teams and mul -million-dollar campaigns. Heris a director of brand marke ng, with experience managing global teams and mul -million-dollar campaigns.",
  },
};

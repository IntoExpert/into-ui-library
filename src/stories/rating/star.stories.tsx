import { ComponentStory, ComponentMeta } from '@storybook/react';
import "../../index.css";
import { RatingStar } from '../../components/rating';


export default {
  title: 'Rating & Reviews/stars',
  component: RatingStar,
} as ComponentMeta<typeof RatingStar>;

const Template: ComponentStory<typeof RatingStar> = (args) => <RatingStar {...args} />;

export const RatingStar1 = Template.bind({});
RatingStar1.args = {
  value: 3,
};

export const RatingStar2 = Template.bind({});
RatingStar2.args = {
  disabled: true,
  onRate: (value) => alert(value),
};

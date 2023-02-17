import { ComponentStory, ComponentMeta } from '@storybook/react';
import "../../index.css";
import { RatingBar } from '../../components/rating';


export default {
    title: 'Rating & Reviews/bar',
    component: RatingBar,
} as ComponentMeta<typeof RatingBar>;

const Template: ComponentStory<typeof RatingBar> = (args) => <RatingBar {...args} />;

export const RatingBar1 = Template.bind({});
RatingBar1.args = {
    value: 0.8,
    showValue: true
};

export const RatingBar2 = Template.bind({});
RatingBar2.args = {
    value: 0.2
};

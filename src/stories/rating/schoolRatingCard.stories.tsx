import { ComponentStory, ComponentMeta } from '@storybook/react';
import "../../index.css";
import { SchoolReviewCard } from '../../components/rating/reviewCard/schoolReviewCard';
import { DateTime } from 'luxon';


export default {
    title: 'Rating & Reviews/School Review Card',
    component: SchoolReviewCard,
} as ComponentMeta<typeof SchoolReviewCard>;

const Template: ComponentStory<typeof SchoolReviewCard> = (args) => <SchoolReviewCard {...args} />;

export const SchoolReviewCardRating5 = Template.bind({});
SchoolReviewCardRating5.args = {
    rating: 5,
    date: DateTime.now(),
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
};

export const EditableSchoolReviewCardRating5 = Template.bind({});
EditableSchoolReviewCardRating5.args = {
    rating: 5,
    date: DateTime.now(),
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    isEditable: true,
    onEdit: () => {
        window.confirm('Are you sure you want to edit');
    },
};

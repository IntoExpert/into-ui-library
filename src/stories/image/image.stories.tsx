import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import "../../index.css";
import { Avatar } from '../../components/image';


export default {
    title: 'Image/avatar',
    component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
    alt: "Face portrait",
    src: "https://cdn.dribbble.com/users/544003/screenshots/18063915/media/13befc9277da37247dad63ddb46c235f.jpg?compress=1&resize=400x300",
    className: "h-20 w-20"
};

export const WithLabel = Template.bind({});
WithLabel.args = {
    alt: "Face portrait",
    src: "https://cdn.dribbble.com/users/544003/screenshots/18063915/media/13befc9277da37247dad63ddb46c235f.jpg?compress=1&resize=400x300",
    label: {
        name: "Face portrait"
    },
};

export const WithoutImage = Template.bind({});
WithoutImage.args = {
    alt: "Face portrait",
    firstName: "Motasem",
    lastName: "Ghozlan",
    label: {
        name: "Face portrait"
    },
};

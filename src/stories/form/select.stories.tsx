import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from '../../components';


export default {
    title: 'Form/Select',
    component: Select,

} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const DefaultState = Template.bind({});
DefaultState.args = {

};

export const OnError = Template.bind({});
OnError.args = {
    defaultValue: "Mg",
    options: ["Hi", "Hello"]
};

export const Searchable = Template.bind({});
Searchable.args = {
    isSearchable: true,
    size: "sm"
};

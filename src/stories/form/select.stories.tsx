import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from '../../components';


export default {
    title: 'Form/Select',
    component: Select,

} as ComponentMeta<typeof Select>;

export const colourOptions = [
    { value: "ocean1", label: "Ocean" },
    { value: "blue", label: "Blue" },
    { value: "purple", label: "Purple" },
    { value: "red", label: "Red" },
    { value: "orange", label: "Orange" },
    { value: "yellow", label: "Yellow" },
    { value: "green", label: "Green" },
    { value: "forest", label: "Forest" },
    { value: "slate", label: "Slate" },
    { value: "silver", label: "Silver" }
];

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} options={colourOptions} />;

export const DefaultState = Template.bind({});
DefaultState.args = {
    options: colourOptions
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

export const MultiSelect = Template.bind({});
MultiSelect.args = {
    isMulti: true
}
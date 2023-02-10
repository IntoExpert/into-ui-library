import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputField } from '../../components';
import "../../index.css";


export default {
    title: 'Form/Inputs',
    component: InputField,

} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = (args) => <InputField {...args} />;

export const DefaultState = Template.bind({});
DefaultState.args = {
    defaultValue: "Hi",
    label: "Type there"
};

export const OnError = Template.bind({});
OnError.args = {
    defaultValue: "Mg",
    errorMessage: "Type at least 4 characters"
};

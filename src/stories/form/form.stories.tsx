import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DynamicForm, InputField } from '../../components';
import "../../index.css";


export default {
    title: 'Form/dynamic',
    component: DynamicForm,
} as ComponentMeta<typeof DynamicForm>;

const Template: ComponentStory<typeof DynamicForm> = (args) => <DynamicForm {...args} />;

export const DefaultState = Template.bind({});
DefaultState.args = {
    fields: [
        {
            label: 'name',
            name: 'name',
            className: ``,
            validation: {
                required: true,
            }
        },
        {
            label: 'Email',
            name: 'email',
            className: ``,
            validation: {
                required: true,
                validate: (value) => {
                    return /[a-z]*@[a-z]*\.[a-z]*/.test(value)
                },
            }
        }
    ]
};

export const OnError = Template.bind({});
OnError.args = {
    fields: [
        {
            name: 'Name',
            className: ``,
            validation: {
                required: true,
            }
        },
        {
            name: 'Email',
            className: ``,
            validation: {
                required: true,
            }
        }
    ]
};

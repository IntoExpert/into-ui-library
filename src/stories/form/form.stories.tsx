import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DynamicForm } from '../../components';
import "../../index.css";


export default {
    title: 'Form/dynamic',
    component: DynamicForm,
} as ComponentMeta<typeof DynamicForm>;

const Template: ComponentStory<typeof DynamicForm> = (args) => <DynamicForm {...args} />;

export const DefaultState = Template.bind({});
DefaultState.args = {
    cssClasses: `space-y-3`,
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

export const RadioInput = Template.bind({});
RadioInput.args = {
    cssClasses: `grid grid-cols-12`,
    fields: [
        {
            label: 'Hi',
            name: 'name',
            defaultValue: 'hi',
            type: 'radio',
            containerClassName: `col-span-4`
        },
        {
            label: 'Hello',
            name: 'name',
            defaultValue: 'hello',
            type: 'radio',
            containerClassName: `col-span-4`
        },
        {
            label: 'Email',
            name: 'email',
            type: 'checkbox',
            containerClassName: `col-span-4`
        },
        {
            label: 'Text',
            name: 'text',
            containerClassName: `col-span-12`,
            validation: {
                required: true,
                messages: {
                    required: 'Text is required'
                }
            },
        },
    ],
};

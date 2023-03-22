import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextArea } from '../../components/form/input/textArea/textArea';


export default {
    title: 'Form/Textarea',
    component: TextArea,

} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />;

export const DefaultState = Template.bind({});
DefaultState.args = {
    placeholder: `Text area`,
    maxLength: 300,
    value: "Text area value",
    charLeftCountRenderer: (charLeftCount) => <span>${charLeftCount} characters left</span>,
};

export const OnError = Template.bind({});
OnError.args = {

};

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputField } from '../../components';

export default {
    title: 'Form/Inputs',
    component: InputField,

} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = (args) => <InputField {...args} />;

export const DefaultState = Template.bind({});
DefaultState.args = {
    placeholder: "Hi",
    label: "Type there"
};

export const OnError = Template.bind({});
OnError.args = {
    defaultValue: "Mg",
    errormessage: "Type at least 4 characters"
};

export const Checkbox = Template.bind({});
Checkbox.args = {
    type: "checkbox",
    name: "checkbox"
};

export const featuredPlaceholder = Template.bind({});
featuredPlaceholder.args = {
    value: "Hi",
    featuredPlaceholder: <div className={``}>Hello <span className={`text-xs`}>70 chars</span></div>
};

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

export const Checkbox = Template.bind({});
Checkbox.args = {
    type: "checkbox",
};

export const featuredPlaceholder = Template.bind({});
featuredPlaceholder.args = {
    featuredPlaceholder: <div className={``}>Hello <span className={`text-xs`}>70 chars</span></div>
};

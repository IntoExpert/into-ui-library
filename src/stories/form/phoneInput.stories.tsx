import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PhoneInput } from '../../components';


export default {
    title: 'Form/Phone',
    component: PhoneInput,

} as ComponentMeta<typeof PhoneInput>;

const Template: ComponentStory<typeof PhoneInput> = (args) =>
    <PhoneInput {...args} />

const RTLTemplate: ComponentStory<typeof PhoneInput> = (args) => <div dir='rtl'>
    <PhoneInput {...args} />
</div>;

export const DefaultState = Template.bind({});
DefaultState.args = {

};

export const RTLState = RTLTemplate.bind({});
DefaultState.args = {

};
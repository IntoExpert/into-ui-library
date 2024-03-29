import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PhoneInput } from '../../components';


export default {
    title: 'Form/Phone',
    component: PhoneInput,

} as ComponentMeta<typeof PhoneInput>;

const Template: ComponentStory<typeof PhoneInput> = (args) => <PhoneInput {...args} />;

export const DefaultState = Template.bind({});
DefaultState.args = {

};
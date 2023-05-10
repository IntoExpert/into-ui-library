import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PasswordField } from '../../components/form/input/password/passwordField';


export default {
    title: 'Form/Password',
    component: PasswordField,

} as ComponentMeta<typeof PasswordField>;

const Template: ComponentStory<typeof PasswordField> = (args) => <PasswordField {...args} />;

export const DefaultState = Template.bind({});
DefaultState.args = {

};

export const WithdefaultValue = Template.bind({});
WithdefaultValue.args = {
    value: '445566',
};

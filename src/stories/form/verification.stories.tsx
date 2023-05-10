import { ComponentStory, ComponentMeta } from '@storybook/react';
import { VerificationCodeInput } from '../../components/form/input/verificationCode/verificationCodeInput';


export default {
    title: 'Form/Verification',
    component: VerificationCodeInput,

} as ComponentMeta<typeof VerificationCodeInput>;

const Template: ComponentStory<typeof VerificationCodeInput> = (args) => <VerificationCodeInput {...args} />;

export const DefaultState = Template.bind({});
DefaultState.args = {

};

export const OnError = Template.bind({});
OnError.args = {

};

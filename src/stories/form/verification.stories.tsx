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

export const WithdefaultValue = Template.bind({});
WithdefaultValue.args = {
    value: '445566',
    onChange: (value) => {
        if (value.length) console.log(value);
        else console.log('No code yet')
    }
};

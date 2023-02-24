import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ImageUpload } from '../../components/form/input/fileUpload/imageUpload/imageUpload';


export default {
    title: 'Form/Upload image',
    component: ImageUpload,

} as ComponentMeta<typeof ImageUpload>;

const Template: ComponentStory<typeof ImageUpload> = (args) => <ImageUpload {...args} />;

export const UploadImageComponent = Template.bind({});
UploadImageComponent.args = {
    uploadButton: {
        children: "Upload"
    },
    retakeButton: {
        children: "Retake"
    }
};
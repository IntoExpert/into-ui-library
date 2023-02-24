import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MediaUpload } from '../../components/form/input/fileUpload/mediaUpload/mediaUpload';


export default {
    title: 'Form/Upload image',
    component: MediaUpload,

} as ComponentMeta<typeof MediaUpload>;

const Template: ComponentStory<typeof MediaUpload> = (args) => <MediaUpload {...args} />;

export const UploadImageComponent = Template.bind({});
UploadImageComponent.args = {
    uploadButton: {
        children: "Upload"
    },
    retakeButton: {
        children: "Retake"
    }
};
import { ComponentStory, ComponentMeta } from '@storybook/react';
import "../../index.css";
import { FileUpload } from '../../components/form/input/fileUpload/fileUpload';


export default {
    title: 'Form/Upload file',
    component: FileUpload,

} as ComponentMeta<typeof FileUpload>;

const Template: ComponentStory<typeof FileUpload> = (args) => <FileUpload {...args} />;

export const DefaultState = Template.bind({});
DefaultState.args = {
};

export const WithCustomBody = Template.bind({});
WithCustomBody.args = {
    body: <div className="text-danger">Drag and drop your files to upload them</div>,
    onDropAvailableContent: <div className="text-danger">Drop your file here</div>,
    onAdd(files) {
        const objectUrl = URL.createObjectURL(files[0]);
        window.open(objectUrl, '_blank');
    },
};

export const WithValidation = Template.bind({});
WithValidation.args = {
    body: <div className="text-danger">Drag and drop your files to upload them</div>,
    onDropAvailableContent: <div className="text-danger">Drop your file here</div>,
    onAdd(files) {
        const objectUrl = URL.createObjectURL(files[0]);
        window.open(objectUrl, '_blank');
    },
    onFilesRejected(files) {
        alert(`${files.length} files rejected`);
    },
    accept: {
        'image/*': []
    }
};

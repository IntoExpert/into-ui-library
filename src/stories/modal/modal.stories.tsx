import { StoryFn, Meta } from '@storybook/react';
import { Button, Modal } from '../../components';
import { useState } from 'react';


export default {
    title: 'Dialogs/modal',
    component: Modal,
} as Meta<typeof Modal>;

const Template: StoryFn<typeof Modal> = (args) => {
    const [show, setShow] = useState(false);
    return <div>
        <Button onClick={() => { setShow(!show) }}>Show/Hide</Button>
        <Modal {...args} show={show} onClose={() => setShow(false)} />
    </div>;
};

export const modal = Template.bind({});
modal.args = {
    show: true,
    children: <div className="h-20 w-96 text-center bg-slate-50">
        A modal
        <Button >Click gere</Button>
    </div>

};
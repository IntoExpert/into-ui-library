import { ComponentStory, ComponentMeta } from "@storybook/react";
import { IconButton } from "../../components/button/icon/iconButton";

export default {
    title: 'Buttons/icon button',
    component: IconButton
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const defaultState = Template.bind({});
defaultState.args = {
    children: <h2>Click here!</h2>,
    onClick: () => { alert('clicked') },
    title: "Click here!",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={24} height={24}>
        <path d="M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z" />
    </svg>
};
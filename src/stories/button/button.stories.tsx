import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../../components/button/button";

export default {
    title: 'Buttons/regular',
    component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const defaultState = Template.bind({});
defaultState.args = {
    children: <h2>Click here!</h2>,
    onClick: () => { alert('clicked') },
    title: "Click here!"
};
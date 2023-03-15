import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CircularSpinner } from "../../components/spinner/circularSpinner";

export default {
    title: 'Spinner/Circular',
    component: CircularSpinner,

} as ComponentMeta<typeof CircularSpinner>;

const Template: ComponentStory<typeof CircularSpinner> = (args) => <CircularSpinner {...args} />;

export const DefaultState = Template.bind({});
DefaultState.args = {
    className: `w-10 h-10`
};

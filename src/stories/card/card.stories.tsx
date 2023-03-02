import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Card } from "../../components/card";

export default {
    title: 'Cards/card',
    component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const defaultState = Template.bind({});
defaultState.args = {
    children: <h2 className={`p-5`}>Hi!</h2>,
};
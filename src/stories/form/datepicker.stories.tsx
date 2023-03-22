import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DatePicker } from "../../components/form/input/date/datePicker";

export default {
    title: 'Form/datepicker',
    component: DatePicker,
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = (args) => <DatePicker {...args} />;

export const defaultState = Template.bind({});
defaultState.args = {
    inline: true,
    minDate: new Date(),
};
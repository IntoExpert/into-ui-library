import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DatePicker } from "../../components/form/input/date/datePicker";
import { TimePicker } from "../../components/form/input/date/datePicker/timePicker";

export default {
    title: 'Form/Timepicker',
    component: DatePicker,
} as ComponentMeta<typeof TimePicker>;

const Template: ComponentStory<typeof TimePicker> = (args) => <TimePicker {...args} />;

export const defaultState = Template.bind({});
defaultState.args = {
    minDate: new Date(),
    selected: new Date(),
};
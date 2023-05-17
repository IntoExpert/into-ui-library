import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DatePicker } from "../../components/form/input/date/datePicker";
import { TimePicker } from "../../components/form/input/date/datePicker/timePicker";

import { enGB, arSA } from "date-fns/locale";
import { registerLocale } from "react-datepicker";


registerLocale('en', enGB);
registerLocale('ar', arSA);

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

export const DateTimePicker = Template.bind({});
DateTimePicker.args = {
    locale: 'ar',
    showTimeSelectOnly: false,
    showTimeSelect: true,
    dateFormat: 'yyyy-MM-dd hh:mm aa',
    className: 'w-48',
    containerClassName: 'has-shadow',
    minDate: new Date(),
    selected: new Date(),
};
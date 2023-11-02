import "./style.scss";
import ReactDatePicker, { ReactDatePickerProps } from "react-datepicker";
import { UiElementProps } from "../../../../common";

export interface DatePickerProps extends ReactDatePickerProps, UiElementProps { };

export const DatePicker = ({ className, ...props }: DatePickerProps) => {
    return (<ReactDatePicker
        calendarStartDay={1}
        {...props}
    />);
}
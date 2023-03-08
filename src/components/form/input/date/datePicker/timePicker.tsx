import "react-datepicker/dist/react-datepicker.css";
import "./style.scss";
import ReactDatePicker, { ReactDatePickerProps } from "react-datepicker";
import { UiElementProps } from "../../../../common";
import { ChangeEvent, useCallback, useState } from "react";

export interface TimePickerProps extends UiElementProps, ReactDatePickerProps {

};

export const TimePicker = ({ className, value, ...props }: TimePickerProps) => {

    return (<ReactDatePicker
        calendarStartDay={1}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={30}
        dateFormat={`hh:mm aa`}
        {...props}
        className={`timpicker shadow appearance-none border border-secondary
            rounded h-10 w-24 px-3 text-gray-700 leading-tight 
            focus:outline-none focus:shadow-outline
          placeholder:text-gray-500 ${className ?? ''}`}
        onChange={(value) => console.log(value)}
    />);
}
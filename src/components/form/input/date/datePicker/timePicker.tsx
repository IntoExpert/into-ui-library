import "./style.scss";
import ReactDatePicker, { ReactDatePickerProps } from "react-datepicker";
import { UiElementProps } from "../../../../common";
import { InputLabel } from "../../label";
import { ReactElement } from "react";

export interface TimePickerProps extends UiElementProps, ReactDatePickerProps {
    /**
     * Input label, if you leave it empty no label will show
     */
    label?: ReactElement | string;
    /**
     * Css classses for input label container
     */
    containerClassName?: string;
    /**
     * Input error message, when it is null or undefined, no error considered
     */
    errormessage?: string;
    hasError?: boolean;
    dateFormate?: string | string[];
};

export const TimePicker = ({ className, hasError, value, dateFormat = 'hh:mm aa', ...props }: TimePickerProps) => {

    return (
        <div className={`text-start ${props.containerClassName}`}>
            <InputLabel inputId={props.id} content={props.label} className="block mb-2" />
            <div className={`relative`}>
                <ReactDatePicker
                    calendarStartDay={1}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={30}
                    dateFormat={dateFormat}
                    {...props}
                    className={`timpicker shadow appearance-none border 
            rounded h-10 w-24 px-3 text-gray-700 leading-tight 
            focus:outline-none focus:shadow-outline
          placeholder:text-gray-500 ${hasError || props.errormessage ? 'border-error' : 'border-secondary'} 
          ${className ?? ''}`}
                />
            </div>

            {props.errormessage && <p className="text-red-400 text-xs italic mt-1">{props.errormessage}</p>}
        </div>
    );
}
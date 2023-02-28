import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";
import { UiElementProps } from "../../../common";
import { InputLabel } from "../label";

export interface TextAreaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, UiElementProps {
    /**
     * Input label, if you leave it empty no label will show
     */
    label?: string;
    /**
     * Input error message, when it is null or undefined, no error considered
     */
    errorMessage?: string;
};

export const TextArea = (props: TextAreaProps) => {
    return (
        <div className={``}>
            <InputLabel inputId={props.id} name={props.label} className="block mb-2" />
            <textarea
                {...props}
                className={`border border-secondary text-gray-800 placeholder:text-gray-500 px-2 py-5 rounded ${props.className ?? ''}`}
                title={props.title ?? props.placeholder}
            >{props.defaultValue}</textarea>
            {props.errorMessage && <p className="text-red-600 text-xs italic mt-1">{props.errorMessage}</p>}
        </div>
    )
}

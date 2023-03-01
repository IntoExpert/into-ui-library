import { ReactElement } from "react";
import { UiElementProps } from "../../../common";

export interface InputLabelProps extends UiElementProps {
    inputId?: string;
    content?: ReactElement | string;
}

export const InputLabel = ({ inputId, content, className }: InputLabelProps) =>
    <label className={`text-gray-700 text-sm font-bold ${className ?? ''}`} htmlFor={inputId}>
        {content}
    </label>;
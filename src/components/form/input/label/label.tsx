import { ReactElement } from "react";
import { UiElementProps } from "../../../common";

export interface InputLabelProps extends UiElementProps {
    inputId?: string;
    content?: ReactElement | string;
}

export const InputLabel = ({ inputId, content, className }: InputLabelProps) =>
(content
    ? <label className={`text-gray-500 text-sm ${className ?? ''}`} htmlFor={inputId}>
        {content}
    </label>
    : null);
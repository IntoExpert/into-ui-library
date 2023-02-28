import { UiElementProps } from "../../../common";

export interface InputLabelProps extends UiElementProps {
    inputId?: string;
    name?: string;
}

export const InputLabel = ({ inputId, name, className }: InputLabelProps) =>
    <label className={`text-grey-700 text-sm font-bold ${className ?? ''}`} htmlFor={inputId}>
        {name}
    </label>;
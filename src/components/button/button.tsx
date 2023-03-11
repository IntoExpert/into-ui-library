import { MouseEvent } from "react";
import { UiElementProps } from "../common";

export interface ButtonProps extends UiElementProps {
    /**
     * Button tooltip title
     */
    title?: string;
    /**
     * Set button disabled
     */
    disabled?: boolean;
    /**
     * Button type, ["button", "reset", "submit"]
     */
    type?: "button" | "reset" | "submit";
    /**
     * On button click
     * 
     * @param event 
     * @returns 
     */
    onClick?: (event: MouseEvent) => void;
    /**
     * Button content
     */
    children?: JSX.Element | string | undefined;
};

export const Button = ({ title, disabled, onClick, children, type, className }: ButtonProps) =>
(<button
    className={`bg-secondary text-xs transition-colors hover:bg-primary text-white rounded px-3 py-2 
    disabled:bg-gray-100 disabled:text-gray-800 ${className ?? ''}`}
    title={title}
    type={type}
    onClick={onClick}
    disabled={disabled}>
    {children}
</button>);
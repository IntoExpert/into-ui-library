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
    className={`bg-primary text-white font-bold rounded px-3 py-2 ${className ?? ''}`}
    title={title}
    type={type}
    onClick={onClick}>
    {children}
</button>);
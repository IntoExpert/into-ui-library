import { MouseEvent } from "react";

export interface ButtonProps {
    title?: string;
    disabled?: boolean;
    onClick?: (event: MouseEvent) => void;
    children?: JSX.Element;
};

export const Button = ({ title, disabled, onClick, children }: ButtonProps) =>
(<button
    className={`bg-primary text-white font-bold rounded px-3 py-2`}
    title={title}
    onClick={onClick}>
    {children}
</button>);
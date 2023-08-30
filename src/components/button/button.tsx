import { MouseEvent, useMemo } from "react";
import { UiElementProps, UiElementSize } from "../common";
import { CircularSpinner } from "../spinner";

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
    size?: UiElementSize
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

    isLoading?: boolean
};

export const Button = ({ title, disabled, onClick, children, type, size, className, isLoading = false }: ButtonProps) => {
    const sizeClassName = useMemo(() => {
        switch (size) {
            case 'xs': return 'p-1 text-xs';
            case 'sm': return 'px-2 py-1';
            case 'md': return 'px-3 py-2';
            case 'lg': return 'px-4 py-3';
            case 'xl': return 'px-5 py-3';
            case '2xl': return 'px-6 py-3';
            case '3xl': return 'px-7 py-3';
            case '4xl': return 'px-8 py-4';
            case '5xl': return 'px-8 py-4';
            case 'full': return 'w-full py-3';
            default: return 'px-3 py-2';
        }
    }, [size]);

    return (<button
        className={`bg-secondary text-xs transition-colors hover:bg-primary text-white rounded  ${sizeClassName}
        disabled:!bg-gray-100 disabled:pointer-events-none disabled:text-gray-800 flex justify-center ${className ?? ''}`}
        title={title}
        type={type}
        onClick={onClick}
        disabled={disabled || isLoading}>
        {children} {isLoading ? <><span className={`mx-1`}></span><CircularSpinner className={`w-4 h-4`} /></> : ''}
    </button>);
};
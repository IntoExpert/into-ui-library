import { createPortal } from "react-dom";
import { UiElementProps } from "../../common/uiElement"
import { useCallback, useEffect, useRef, useState } from "react";
import { IconButton } from "../../button";

export interface BelowNavBarAlertProps extends UiElementProps {
    /**
     * Alert message to show
     */
    message: string | JSX.Element;
    /**
     * Element id to show the alert message on top of it
     */
    elementId?: string;
    /**
     * On alert close callback
     */
    onClose?: () => void;
};


/**
 * Alert component that shows in top of an element
 */
export const OnTopOfElementNavbar = ({ message, elementId, onClose, className }: BelowNavBarAlertProps) => {

    const ref = useRef<HTMLDivElement>(null);

    const handleClose = useCallback(() => {
        onClose?.();
    }, [onClose]);

    const MessageComponent = () => (
        <div
            className={`p-3 shadow-lg absolute left-0 right-0 top-0 transition-all  ${className ?? ''} 
            ${message ? 'opacity-100' : 'opacity-0'}`}
            ref={ref}>
            <IconButton
                className={`!px-2 !py-1 absolute top-1/2 right-3 -translate-y-1/2 !bg-primary hover:!bg-primaryVariant hover:text-primary`}
                onClick={handleClose}
                icon={<span>&times;</span>}
            />
            {message}
        </div >
    );

    const handleClickOutside = useCallback((e: MouseEvent) => {
        console.log("click outside")
        if (!ref?.current?.contains(e.target as Node)) {
            onClose?.();
        }
    }, [onClose])

    useEffect(() => {
        if (!message) {
            console.log("remove click outside")
            document.removeEventListener('click', handleClickOutside, true);
            return;
        }
        document.addEventListener('click', handleClickOutside, true)
    }, [handleClickOutside, message]);

    if (typeof window === "object") {
        return createPortal(<MessageComponent />, document.getElementById(elementId ?? 'root') ?? document.body);
    }

    return (
        <MessageComponent />
    );
}
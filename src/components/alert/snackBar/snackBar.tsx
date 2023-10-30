import { createPortal } from "react-dom";
import { UiElementProps } from "../../common/uiElement"
import { useCallback, useEffect, useRef, useState } from "react";
import { IconButton } from "../../button";

import "./styles.css";

export interface BelowNavBarAlertProps extends UiElementProps {
    /**
     * Alert message to show
     */
    message?: string | JSX.Element;
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

    const [isHide, setIsHide] = useState(false);

    const handleClose = useCallback(() => {
        setIsHide(true);

        setTimeout(() => onClose?.(), 500)
    }, [onClose]);

    const MessageComponent = () => (
        <div
            className={`py-3 px-7 shadow-lg absolute left-0 right-0 top-0 transition-all  
            ${className ?? ''}
            ${isHide ? 'animated-hide-snack-bar' : ''}
            ${message ? 'animated-show-snack-bar' : 'opacity-0'}`}
            ref={ref}>
            <IconButton
                className={`absolute top-1/2 right-3 -translate-y-1/2 !bg-transparent 
                hover:!bg-primaryVariant hover:text-primary`}
                onClick={handleClose}
                icon={<span>&times;</span>}
            />
            {message}
        </div >
    );

    const handleClickOutside = useCallback((e: MouseEvent) => {
        if (!message) return;

        if (!ref?.current?.contains(e.target as Node) && !isHide) {
            handleClose();
        }
    }, [handleClose, isHide, message])

    useEffect(() => {
        if (!message) {
            document.removeEventListener('click', handleClickOutside, true);
            return;
        }
        document.addEventListener('click', handleClickOutside, true)

        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        }
    }, [handleClickOutside, message]);

    useEffect(() => setIsHide(false), [message])

    if (!message) return null;

    if (typeof window === "object") {
        return createPortal(<MessageComponent />, document.getElementById(elementId ?? 'root') ?? document.body);
    }

    return (
        <MessageComponent />
    );
}
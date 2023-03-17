import { createPortal } from "react-dom";
import { UiElementProps } from "../../common/uiElement"
import { useEffect, useState } from "react";
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

    const handleClose = () => {
        onClose?.();
    };

    const MessageComponent = () => (
        <div className={`p-3 shadow-lg absolute left-0 right-0 top-0 transition-all  ${className ?? ''} 
        ${message ? 'opacity-100' : 'opacity-0'}`}>
            <IconButton
                className={`!px-2 !py-1 absolute top-1/2 right-3 -translate-y-1/2 !bg-primary hover:!bg-primaryVariant hover:text-primary`}
                onClick={handleClose}
                icon={<span>&times;</span>}
            />
            {message}
        </div >
    );

    if (typeof window === "object") {
        return createPortal(<MessageComponent />, document.getElementById(elementId ?? '') ?? document.body);
    }

    return (
        <MessageComponent />
    );
}
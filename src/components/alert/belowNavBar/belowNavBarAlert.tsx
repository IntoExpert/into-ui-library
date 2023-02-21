import { createPortal } from "react-dom";
import { UiElementProps } from "../../common/uiElement"

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

    const element = document.getElementById(elementId ?? '') ?? document.body;

    const handleClose = () => {
        onClose?.();
    };

    const MessageComponent = () => (
        <div className={`p-2 shadow absolute left-0 right-0 top-0 transition-all  ${className ?? ''} 
        ${message ? 'opacity-100' : 'opacity-0'}`}>
            <button className={`px-2 py-0 absolute top-0 right-0`} onClick={handleClose}>&times;</button>
            {message}
        </div >
    );

    return (
        <>
            {createPortal(<MessageComponent />, element)}
        </>
    );
}
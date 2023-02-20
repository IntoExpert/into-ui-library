import { createPortal } from "react-dom";
import { UiElementProps } from "../../common/uiElement"

export interface BelowNavBarAlertProps extends UiElementProps {
    message: string | JSX.Element;
    onClose?: () => void;
};

export const BelowNavBarAlert = ({ message, onClose, className }: BelowNavBarAlertProps) => {

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
            {createPortal(<MessageComponent />, document.body)}
        </>
    );
}
import { ReactElement } from "react";
import { Button, ButtonProps } from "../../button";
import { Modal } from "../../modal";
import { UiElementProps } from "../../common";

export interface DialogAlertOptions extends UiElementProps {
    cancelButton?: ButtonProps;
    confirmButton?: ButtonProps;
    body?: ReactElement;
    show?: boolean;
    onClose?: () => void;
};

export const DialogAlert = ({ confirmButton, cancelButton, body, show, onClose, className }: DialogAlertOptions) => {
    return <Modal
        show={show}
        size="sm"
        hasCloseButton
        onClose={onClose}
        className={`p-4 bg-surface shadow-lg rounded ${className ?? ''}`}>
        <div className={``}>
            <div className={`flex`}>
                {body}
                <span className={`mx-2`}></span>
            </div>
            <div className={`flex justify-center gap-2 mt-4`}>
                {cancelButton ? <Button {...cancelButton}
                    onClick={(e) => { cancelButton.onClick?.(e); onClose?.(); }}>
                    {cancelButton?.children ?? <span>Cancel</span>}
                </Button> : null}
                {confirmButton ? <Button
                    {...confirmButton}
                    onClick={(e) => {
                        confirmButton.onClick?.(e);
                        onClose?.();
                    }}>
                    {confirmButton?.children ?? <span>Confirm</span>}
                </Button> : null}
            </div>
        </div>
    </Modal>
}
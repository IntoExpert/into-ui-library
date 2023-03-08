import { createPortal } from "react-dom";
import { ReactElement } from "react";
import { UiElementProps } from "../common";
import { IconButton } from "../button";

export interface ModalProps extends UiElementProps {
    show?: boolean;
    hasCloseButton?: boolean;
    onClose?: () => void;
    children?: ReactElement;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "full";
    bgClassname?: string;
};

export const Modal = ({ show, hasCloseButton, onClose, children, size, className, bgClassname }: ModalProps) => {

    if (!show || typeof window !== "object") return null;

    return createPortal(
        <div className={`absolute w-screen h-screen top-0 flex justify-center items-center ${bgClassname ?? ''}`}>
            <div className={`${size ? (`max-w-${size}`) : ''}`}>
                <section className={`relative w-full bg-surface ${className}`}>
                    {hasCloseButton && <IconButton className={`absolute top-1 right-1 `} icon={<span>&times;</span>} onClick={onClose}></IconButton>}
                    {children}
                </section>
            </div >
        </div >
        , document.body)
}
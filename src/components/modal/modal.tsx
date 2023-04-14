import { createPortal } from "react-dom";
import { ReactElement, useCallback, useEffect, useRef, useState } from "react";
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


    const [element, setElement] = useState<HTMLElement | null>(null);

    const ref = useRef<HTMLDivElement>(null);


    if (!show || !element) return null;

    return createPortal(
        <div ref={ref} onClick={onClose} className={`fixed w-screen h-screen top-0 flex justify-center items-center z-30 ${bgClassname ?? ''}`}>
            <section className={`relative w-full bg-surface ${size ? (`max-w-${size}`) : ''} ${className}`}>
                {hasCloseButton && <IconButton className={`absolute top-1 right-1 !p-0 flex items-center`} icon={<span>&times;</span>} onClick={onClose}></IconButton>}
                {children}
            </section>
        </div >
        , document.body)
}
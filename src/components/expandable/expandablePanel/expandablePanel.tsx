import { useEffect, useState } from "react";
import { UiElementProps } from "../../common";

export interface ExpandablePanelProps extends UiElementProps {
    header?: {
        content?: JSX.Element | string;
        className?: string;
    };
    children?: JSX.Element | string;
    toggle?: JSX.Element;
    isOpen?: boolean;
    onToggle?: (isOpen: boolean) => void;
};

export interface ExpandablePanelState {
    isOpen?: boolean;
    isOverflowVisible?: boolean;
}

export const ExpandablePanel = (props: ExpandablePanelProps) => {

    const [state, setState] = useState<ExpandablePanelState>({
        isOpen: props.isOpen || false,
        isOverflowVisible: false
    });

    const togglePanel = () => {
        setState(prevState => ({ ...prevState, isOpen: !prevState.isOpen }));
        props.onToggle?.(!state.isOpen);
    };

    useEffect(() => {
        if (!state.isOpen) {
            setState(prevState => ({ ...prevState, isOverflowVisible: false }));
            return;
        }

        setTimeout(() => {
            setState(prevState => ({ ...prevState, isOverflowVisible: true }));
        }, 500);
    }, [state.isOpen]);

    return (
        <article className={`rounded-none border-t border-t-gray-100 p-2 ${props.className ?? ''}`} >
            <div role="button"
                className={`flex justify-between py-3 px-2  w-full
                ${state.isOpen ? 'text-blue-600' : 'text-black'}
                ${props.header?.className ?? ''}`}
                onClick={togglePanel}>
                {props.header?.content}
                {/* Toggle icons */}
                <span className={`${state.isOpen ? 'transition-transform rotate-180 ' : 'w-5 '}`}>{props.toggle ??
                    <div className={`align-middle -rotate-90 my-auto `}>&#10094;</div>}
                </span>
            </div>
            <div
                className={`
                ${!state.isOverflowVisible || !state.isOpen ? 'overflow-hidden' : ''}
                 transition-all 
                 ${state.isOpen ? 'max-h-[999999]' : 'max-h-0'}`}>
                {props.children}
            </div>
        </article>
    );
}
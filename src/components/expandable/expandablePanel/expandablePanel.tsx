import { useState } from "react";
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
}

export const ExpandablePanel = (props: ExpandablePanelProps) => {

    const [state, setState] = useState<ExpandablePanelState>({
        isOpen: props.isOpen || false
    });

    const togglePanel = () => {
        setState(prevState => ({ ...prevState, isOpen: !prevState.isOpen }));
        props.onToggle?.(!state.isOpen);
    };

    return (
        <article className={`rounded-none border-t border-t-gray-100 p-2 ${props.className ?? ''}`} >
            <button
                className={`flex justify-between py-3 w-full 
                ${state.isOpen ? 'text-blue-600' : 'text-black'}
                ${props.header?.className ?? ''}`}
                onClick={togglePanel}>
                {props.header?.content}
                {/* Toggle icons */}
                <span className={`${state.isOpen ? 'transition-transform rotate-180' : ''}`}>{props.toggle ??
                    <div className={`align-middle -rotate-90`}>&#10094;</div>}</span>
            </button>
            <div
                className={`overflow-hidden transition-all ${state.isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                {props.children}
            </div>
        </article>
    );
}
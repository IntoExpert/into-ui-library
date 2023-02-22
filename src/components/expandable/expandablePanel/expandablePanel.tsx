import { useState } from "react";
import { UiElementProps } from "../../common";

export interface ExpandablePanelProps extends UiElementProps {
    header?: JSX.Element | string;
    children?: JSX.Element | string;
    toggle?: JSX.Element;
    isOpen?: boolean;
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
    };

    return (
        <article className={`rounded-none border-t border-t-gray-100 p-2 ${props.className ?? ''}`} >
            <button
                className={`flex justify-between py-3 w-full ${state.isOpen ? 'text-blue-600' : 'text-black'}`}
                onClick={togglePanel}>
                {props.header}
                {/* Toggle icons */}
                <span className={`${state.isOpen ? 'transition-transform rotate-180' : ''}`}>{props.toggle}</span>
            </button>
            <div
                className={`overflow-hidden transition-all ${state.isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                {props.children}
            </div>
        </article>
    );
}
import { useState } from "react";
import { UiElementProps } from "../common";
import { DropdownItem, DropdownItemProps } from "./item/item";

export interface DropdownProps extends UiElementProps {
    icon: JSX.Element;
    items: DropdownItemProps[];
};

export interface DropdownState {
    isOpen?: boolean;
}

export const Dropdown = ({ icon, items, className }: DropdownProps) => {

    const [state, setState] = useState<DropdownState>({ isOpen: false });

    const handleToggle = () => setState(prevState => ({ isOpen: !prevState.isOpen }));

    const handleClose = () => setState({ isOpen: false });

    return (
        <button
            className={`w-10 h-10 cursor-pointer rounded transition hover:bg-blue-50 relative ${className ?? ''}`}
            onClick={handleToggle}
            onBlur={handleClose}>
            {icon}
            <ul className={`absolute shadow-md rounded overflow-hidden ${state.isOpen ? 'max-w-fit px-1 p-2 ' : 'max-w-0'}`}>
                {items?.map((item, index) => (<DropdownItem key={index} {...item} />))}
            </ul>
        </button>
    );
}
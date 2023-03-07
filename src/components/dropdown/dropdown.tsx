import { useState } from "react";
import { UiElementProps } from "../common";
import { DropdownItem, DropdownItemProps } from "./item/item";

export interface DropdownMenuProps extends UiElementProps {
    items: DropdownItemProps[];
}

export interface DropdownProps extends UiElementProps {
    icon: JSX.Element;
    menu?: DropdownMenuProps
};

export interface DropdownState {
    isOpen?: boolean;
}

export const Dropdown = ({ icon, menu, className }: DropdownProps) => {

    const [state, setState] = useState<DropdownState>({ isOpen: false });

    const handleToggle = () => setState(prevState => ({ isOpen: !prevState.isOpen }));

    const handleClose = () => setState({ isOpen: false });

    return (
        <button
            type="button"
            className={`w-10 h-10 cursor-pointer rounded transition hover:bg-blue-50 relative ${className ?? ''}`}
            onClick={handleToggle}
            onBlur={handleClose}>
            <span className={`flex justify-center`}>
                {icon}
            </span>
            <ul className={`absolute shadow-md rounded overflow-hidden bg-white
                ${state.isOpen ? 'max-w-fit px-1 p-2 ' : 'max-w-0'} 
                ${menu?.className ?? ''}`}>
                {menu?.items?.map((item, index) => (<DropdownItem key={index} {...item} />))}
            </ul>
        </button>
    );
}
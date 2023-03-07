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
        <div className={`rela`}>
            <button
                type="button"
                className={`w-10 h-10 cursor-pointer rounded transition hover:bg-blue-50 relative ${className ?? ''}`}
                onClick={handleToggle}
            >
                <span className={`flex justify-center`}>
                    {icon}
                </span>
            </button>
            <ul className={`absolute shadow-md rounded overflow-hidden bg-white z-10
            ${state.isOpen ? 'max-w-fit px-1 p-2 ' : 'max-w-0'} 
            ${menu?.className ?? ''}`}
                onBlur={handleClose}>
                {menu?.items?.map((item, index) => (<DropdownItem key={index} {...item} />))}
            </ul>
        </div>
    );
}
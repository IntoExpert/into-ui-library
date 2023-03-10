import { useMemo, useRef, useState } from "react";
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

    const menuRef = useRef<HTMLUListElement>(null);

    const handleToggle = () => {
        setState(prevState => {
            const newIsOpen = !prevState.isOpen;
            if (newIsOpen) {
                document.addEventListener("mousedown", closeOpenMenus)
            } else {
                document.removeEventListener("mousedown", closeOpenMenus);
            }
            return ({ isOpen: !prevState.isOpen })
        })
    };

    const closeOpenMenus = (e: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
            document.removeEventListener("mousedown", closeOpenMenus);
            setState(prevState => ({ ...prevState, isOpen: false }));
        };
    }

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
                ref={menuRef}>
                {menu?.items?.map((item, index) => (<DropdownItem key={index} {...item} />))}
            </ul>
        </div>
    );
}
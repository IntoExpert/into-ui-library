import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { UiElementProps } from "../common";
import { DropdownItem, DropdownItemProps } from "./item/item";

export interface DropdownMenuProps extends UiElementProps {
  items: DropdownItemProps[];
}

export interface DropdownRefType {
  close: () => void;
}

export interface DropdownProps extends UiElementProps {
  icon: JSX.Element;
  onClick?: (event: React.MouseEvent) => void;
  menu?: DropdownMenuProps
};

export interface DropdownState {
  isOpen?: boolean;
}

export const Dropdown = forwardRef<DropdownRefType, DropdownProps>(({ icon, menu, dir, onClick, className }, ref) => {

  const [state, setState] = useState<DropdownState>({ isOpen: false });

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();

    const newIsOpen = !state.isOpen;
    if (newIsOpen) {
      document.addEventListener("mouseup", closeOpenMenus);
    } else {
      document.removeEventListener("mouseup", closeOpenMenus);
    }

    setState({ isOpen: newIsOpen })

    onClick?.(e);
  };

  const closeOpenMenus = (e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      document.removeEventListener("mouseup", closeOpenMenus);

      setState((prevState) => ({ ...prevState, isOpen: false }));
    }
  };

  useImperativeHandle(ref, () => ({
    close() {
      setState({ isOpen: false })
    }
  }), [])

  return (
    <div
      className={`relative`}
      ref={dropdownRef}
    >
      <button
        type="button"
        className={`w-10 h-10 cursor-pointer rounded transition hover:bg-blue-50 relative ${className ?? ""
          }`}
        onClick={handleToggle}
      >
        <span className={`flex justify-center`}>{icon}</span>
      </button>
      <ul
        className={`absolute shadow-md rounded overflow-hidden bg-white z-10
                ${state.isOpen ? "max-w-fit px-1 p-2" : "max-w-0"}
                ${menu?.className ?? ""} ${dir === "rtl" ? "left-0 right-auto" : ""
          }`}
      >
        {menu?.items?.map((item, index) => (
          <DropdownItem key={item.key ?? index} {...item} />
        ))}
      </ul>
    </div>
  );
});
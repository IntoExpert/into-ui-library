import { useState } from "react";
import { UiElementProps } from "../../common";
import { NavbarDropdownProps, NavbarDropdowns } from "./dropdowns/dropdowns";
import { NavbarLinkProps, NavbarLinks } from "./links/links";

import { Sling as Hamburger } from 'hamburger-react'

export interface IntoNavbarProps extends UiElementProps {
    logo?: JSX.Element;
    links?: NavbarLinkProps;
    dropdowns?: NavbarDropdownProps;
};

export const IntoNavbar = ({ dir, ...props }: IntoNavbarProps) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={`shadow-md bg-surface py-2 px-4 flex items-center relative ${props.className}`}>
            <div className={`md:hidden`}>
                <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} />
            </div>
            <div className={`w-24`}>
                {props.logo}
            </div>
            <span className={`mx-4`}></span>
            <NavbarLinks {...props.links}
                className={`transition-all overflow-hidden 
                ${dir === 'rtl' ? 'origin-right' : 'origin-left'} 
                space-y-4 p-5 ${isOpen ? '!block' : 'scale-x-0 opacity-0 pointer-events-none'}
                 bg-white absolute top-14 left-0 right-0 shadow-sm rounded-sm md:static 
                 md:!flex md:p-0 md:!scale-100 md:!opacity-100 md:shadow-none md:space-y-0 md:overflow-visible
                 ${props.links?.className}`} />
            <span className={`mx-auto`}></span>
            <NavbarDropdowns {...props.dropdowns} />
        </nav>
    );
};
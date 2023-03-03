import { UiElementProps } from "../../common";
import { NavbarDropdownProps, NavbarDropdowns } from "./dropdowns/dropdowns";
import { NavbarLinkProps, NavbarLinks } from "./links/links";

export interface IntoNavbarProps extends UiElementProps {
    logo?: JSX.Element;
    links?: NavbarLinkProps;
    dropdowns?: NavbarDropdownProps;
};

export const IntoNavbar = (props: IntoNavbarProps) => {
    return (
        <nav className={`shadow-md bg-surface py-2 px-4 flex items-center ${props.className}`}>
            <div className={`w-24`}>
                {props.logo}
            </div>
            <span className={`mx-4`}></span>
            <NavbarLinks {...props.links} className={`hidden md:flex ${props.links?.className}`} />
            <span className={`mx-auto`}></span>
            <NavbarDropdowns {...props.dropdowns} />
        </nav>
    );
};
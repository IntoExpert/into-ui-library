import { UiElementProps } from "../../common";
import { NavbarDropdownProps, NavbarDropdowns } from "./dropdowns/dropdowns";
import { NavbarLinkProps, NavbarLinks } from "./links/links";

export interface NavbarProps extends UiElementProps {
    logo?: JSX.Element;
    links?: NavbarLinkProps;
    dropdowns?: NavbarDropdownProps;
};

export const Navbar = (props: NavbarProps) => {
    return (
        <nav className={`shadow-md bg-surface py-2 px-4 flex items-center`}>
            <div className={`w-24`}>
                {props.logo}
            </div>
            <span className={`mx-4`}></span>
            <NavbarLinks {...props.links} />
            <span className={`mx-auto`}></span>
            <NavbarDropdowns {...props.dropdowns} />
        </nav>
    );
};
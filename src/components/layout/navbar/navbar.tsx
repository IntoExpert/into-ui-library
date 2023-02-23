import { UiElementProps } from "../../common";
import { NavbarLinkProps, NavbarLinks } from "./links/links";

export interface NavbarProps extends UiElementProps {
    logo?: JSX.Element;
    navbarLinks?: NavbarLinkProps;
};

export const Navbar = (props: NavbarProps) => {
    return (
        <nav className={`shadow-md bg-surface p-4 flex`}>
            <div className={`w-24`}>
                {props.logo}
            </div>
            <span className={`mx-4`}></span>
            <NavbarLinks {...props.navbarLinks} />
        </nav>
    );
};
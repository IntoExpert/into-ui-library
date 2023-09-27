import { UiElementProps } from "../../../common";
import { Link, LinkProps } from "../../../links";

export interface NavbarLinkProps extends UiElementProps {
    links?: LinkProps[];
};

export const NavbarLinks = (props: NavbarLinkProps) => {

    return (
        <ul className={`flex gap-2 justify-start ${props.className}`}>
            {props.links?.map((link, index) => (
                <li key={index} className={``}>
                    {index > 0 ? <span className={``}></span> : null}
                    <Link {...link}
                        className={`rounded-full p-2 transition-colors text-sm 
                        hover:bg-primary hover:text-white ${link.className}`} />
                </li>
            ))}
        </ul>
    );
}
import { UiElementProps } from "../../../common";
import { Link, LinkProps } from "../../../links";

export interface NavbarLinkProps extends UiElementProps {
    links?: LinkProps[];
};

export const NavbarLinks = (props: NavbarLinkProps) => {

    return (
        <ul className="flex justify-start">
            {props.links?.map((link, index) => (
                <li key={index} className={``}>
                    {index > 0 ? <span className={`mx-2`}></span> : null}
                    <Link {...link} className={`rounded-full p-3 transition-colors hover:bg-primary hover:text-white`} />
                </li>
            ))}
        </ul>
    );
}
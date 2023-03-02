import { UiElementProps } from "../../common";
import { Link, LinkProps } from "../../links";

export interface DropdownItemProps extends UiElementProps {
    icon?: JSX.Element;
    link?: LinkProps;
};

export const DropdownItem = (props: DropdownItemProps) => {

    return (<li className={`px-5 py-2 text-gray-700 text-sm rounded-md transition hover:bg-blue-100 ${props.className ?? ''}`}>
        <Link {...props.link}>
            <>
                {props.icon
                    ? <>
                        {props.icon}
                        <span className="mx-2"></span>
                    </>
                    : null}
                {props.link?.children}
            </>
        </Link>
    </li>);
}
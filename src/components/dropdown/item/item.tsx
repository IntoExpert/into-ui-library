import { link } from "fs";
import { Button, ButtonProps } from "../../button";
import { UiElementProps } from "../../common";
import { Link, LinkProps } from "../../links";
import { ReactElement } from "react";

export interface DropdownItemProps extends UiElementProps {
    icon?: JSX.Element;
    link?: LinkProps;
    button?: ButtonProps;
    custom?: ReactElement;
};

export const DropdownItem = (props: DropdownItemProps) => {

    return (
        props.custom
            ? <li>{props.custom}</li>
            : <li onClick={e => e.stopPropagation()} className={`px-5 py-2 text-gray-700 text-sm rounded-md transition hover:bg-blue-100 ${props.className ?? ''}`}>
                {props.link
                    ? <Link {...props.link}>
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
                    : <Button {...props.button}
                        onClick={(e) => { e.stopPropagation(); props.button?.onClick?.(e) }}
                        className={`
                    !bg-transparent !
                    p-0 
                    !text-gray-700 !text-sm rounded-md 
                    transition 
                    hover:bg-blue-100 hover:!text-primary ${props.button?.className ?? ''}`}>
                        <>
                            {props.icon ? <>{props.icon}<span className={`mx-2`}></span></> : null}
                            {props.button?.children}
                        </>
                    </Button>}
            </li>
    );
}
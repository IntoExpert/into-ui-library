import { UiElementProps } from "../common";

export interface LinkProps extends UiElementProps {
    href?: string;
    title?: string;
    target?: React.HTMLAttributeAnchorTarget;
    children?: JSX.Element | string;
};

export const Link = (props: LinkProps) => (
    <a className={`hover:text-blue-600`} {...props}>
        {props.children}
    </a>
);
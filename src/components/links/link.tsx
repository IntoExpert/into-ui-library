import { UiElementProps } from "../common";

export interface LinkProps extends UiElementProps {
    href?: string;
    title?: string;
    target?: React.HTMLAttributeAnchorTarget;
    children?: JSX.Element | string;
    asButton?: boolean;
};

export const Link = (props: LinkProps) => (
    <a
        className={`transition-colors 
            ${props.asButton ? 'hover:bg-primaryVariant' : 'hover:text-blue-600'} ${props.className ?? ''}`}
        {...props}>
        {props.children}
    </a>
);
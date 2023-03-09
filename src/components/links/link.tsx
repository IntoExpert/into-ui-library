import { UiElementProps } from "../common";

export interface LinkProps extends UiElementProps {
    href?: string;
    title?: string;
    target?: React.HTMLAttributeAnchorTarget;
    children?: JSX.Element | string;
    hasButtonStyle?: boolean;
};

export const Link = (props: LinkProps) => (
    <a  {...props}
        className={`transition-colors 
            ${props.hasButtonStyle ? 'hover:bg-primaryVariant' : 'hover:text-primary'} 
            ${props.className ?? ''}`}
    >
        {props.children}
    </a>
);
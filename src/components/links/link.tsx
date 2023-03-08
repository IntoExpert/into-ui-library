import { UiElementProps } from "../common";

export interface LinkProps extends UiElementProps {
    href?: string;
    title?: string;
    target?: React.HTMLAttributeAnchorTarget;
    children?: JSX.Element | string;
    showasbutton?: boolean;
};

export const Link = (props: LinkProps) => (
    <a  {...props}
        className={`transition-colors 
            ${props.showasbutton ? 'hover:bg-primaryVariant' : 'hover:text-primary'} 
            ${props.className ?? ''}`}
    >
        {props.children}
    </a>
);
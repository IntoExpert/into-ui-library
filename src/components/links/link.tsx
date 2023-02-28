import { UiElementProps } from "../common";

export interface LinkProps extends UiElementProps {
    href?: string;
    title?: string;
    target?: React.HTMLAttributeAnchorTarget;
    children?: JSX.Element | string;
    showAsButton?: boolean;
};

export const Link = (props: LinkProps) => (
    <a  {...props}
        className={`transition-colors 
            ${props.showAsButton ? 'hover:bg-primaryVariant' : 'hover:text-blue-600'} 
            ${props.className ?? ''}`}
    >
        {props.children}
    </a>
);
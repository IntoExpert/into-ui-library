import { ReactElement } from "react";
import { Button, ButtonProps } from "../button";

export interface IconButtonProps extends ButtonProps {
    icon?: ReactElement;
    withoutBg?: boolean;
};

export const IconButton = ({ icon, withoutBg, className, ...props }: IconButtonProps) => {

    return (<Button {...props}
        className={`rounded-full aspect-square !p-1 fill-surface
        ${withoutBg ? 'bg-transparent hover:bg-primaryVariant' : ''} 
        ${className ?? ''}`}>
        {icon}
    </Button>)
}
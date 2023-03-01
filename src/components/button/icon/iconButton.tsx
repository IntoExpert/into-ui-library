import { ReactElement } from "react";
import { Button, ButtonProps } from "../button";

export interface IconButtonProps extends ButtonProps {
    icon?: ReactElement;
};

export const IconButton = (props: IconButtonProps) => {

    return (<Button {...props} className={`rounded-full aspect-square !p-1 fill-surface ${props.className ?? ''}`}>
        {props.icon}
    </Button>)
}
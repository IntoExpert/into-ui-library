import { ReactElement } from "react";
import { Button, ButtonProps } from "../button";

export interface IconButton extends ButtonProps {
    icon?: ReactElement;
};

export const IconButton = (props: IconButton) => {

    return (<Button {...props} className={`rounded-full aspect-square !p-1 fill-surface ${props.className ?? ''}`}>
        {props.icon}
    </Button>)
}
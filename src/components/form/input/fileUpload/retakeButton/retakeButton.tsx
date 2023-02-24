import { Button, ButtonProps } from "../../../../button";

export const RetakeButton = (props: ButtonProps) => {

    return (
        <Button {...props} className={`bg-primary border border-primary bg-opacity-40 ${props.className ?? ''}`}>
            {props.children}
        </Button>
    );
};
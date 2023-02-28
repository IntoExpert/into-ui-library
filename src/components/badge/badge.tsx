import { ReactElement } from "react";
import { UiElementProps } from "../common";

export interface badge extends UiElementProps {
    children?: ReactElement;
};

export const Badge = ({ children, className }: badge): ReactElement => {

    return (
        <div className={`relative w-16 bg-secondary text-white ${className ?? ''}`}>
            {children}
        </div>
    );
}
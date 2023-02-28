import { ReactElement } from "react";
import { UiElementProps } from "../common";

export interface badge extends UiElementProps {
    children?: ReactElement;
};

export const Badge = ({ children, className }: badge): ReactElement => {

    return (
        <div className={`relative w-16 bg-secondary text-white ${className ?? ''}`}>
            <div className={`absolute w-3/4 bg-secondary rotate-45 scale-1 top-1/2`}>

            </div>
            {children}
        </div>
    );
}
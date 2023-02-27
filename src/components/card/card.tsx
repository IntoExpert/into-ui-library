import { ReactElement } from "react";
import { UiElementProps } from "../common";

export interface CardProps extends UiElementProps {
    children?: ReactElement;
};

export const Card = ({ children, className }: CardProps) => {
    return (
        <article className={`shadow rounded-lg overflow-clip ${className ?? ''}`}>
            {children}
        </article>
    );
}
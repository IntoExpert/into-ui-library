import { ReactElement } from "react";
import { UiElementProps } from "../common";

export interface CardProps extends UiElementProps {
    id?: string;
    children?: ReactElement;
};

export const Card = ({ id, children, className }: CardProps) => {
    return (
        <article className={`shadow rounded-lg overflow-clip bg-surface ${className ?? ''}`}>
            {children}
        </article>
    );
}
/**
 * Base react ui element props
 */
export interface UiElementProps {
    /**
     * Base element class name.
     */
    className?: string;
    dir?: string;
};

export type UiElementSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "full";
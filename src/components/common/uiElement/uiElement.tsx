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

export type UiElementSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
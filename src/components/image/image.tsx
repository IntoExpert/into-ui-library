import { UiElementProps } from "../common/uiElement";

export interface ImageProps extends UiElementProps {
    /**
     * Image src
     */
    src?: string;
    /**
     * Image alt
     */
    alt?: string;
    /**
     * Image loading method
     */
    loadingMethod?: "lazy" | "eager" | undefined;
};
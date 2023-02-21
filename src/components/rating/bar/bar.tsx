import { UiElementProps } from "../../common/uiElement";

export interface RatingBarProps extends UiElementProps {
    /**
     * Rating value in percent
     * 
     * @example 0.2, or 20/100
     */
    value?: number;
    /**
     * Show progress value or not
     */
    showValue?: boolean;
    /**
     * Container css classes
     */
    containerCssClasses?: string;
};

/**
 * 
 * Shows a progress bar
 * @param props 
 * @returns 
 */
export const RatingBar = (props: RatingBarProps) => {

    return (<div className={`w-full bg-gray-200 rounded-full dark:bg-gray-300 ${props.containerCssClasses}`}>
        <div className={`min-h-[0.375rem] bg-yellow-500 text-[9px] text-gray-50 
            font-bold text-center p-0.5 leading-none rounded-full ${props.className}`}
            style={{ width: `${(props.value ?? 0) * 100}%` }}>
            {props.showValue ? `${(props.value ?? 0) * 100}%` : null}</div>
    </div>);
}
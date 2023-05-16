import { useMemo } from "react";
import { ImageProps } from "../image";

export interface AvatarProps extends ImageProps {
    /**
     * User label
     */
    firstName?: string;
    lastName?: string;
    label?: {
        /**
     * Show user name
     */
        name?: string;
        /**
         * Class name
         */
        classname?: string;
        /**
         * Label place
         */
        place?: "bottom" | "end"
    }
    /**
     * Class name to add for the container of the image and its label
     */
    containerClassName?: string;
};

/**
 * User avatar
 */
export const Avatar = (props: AvatarProps) => {

    const avatatDefaultSrc = useMemo(() => {
        if (props.firstName && props.lastName) {
            return undefined;
        }

        return props.src ?? "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg";

    }, [props.src, props.firstName, props.lastName]);

    return (
        <div className={`flex justify-center items-center 
            ${props.label?.place === "bottom" ? "flex-col" : ""} 
            ${props.className ?? ''}`}>
            {avatatDefaultSrc ? <img {...props}
                alt={props.alt ?? props.label?.name ?? ''}
                src={avatatDefaultSrc}
                title={props.label?.name ?? props.alt ?? ''}
                className={`rounded-full object-cover w-10 h-10 aspect-square ${props.className ?? ''}`}
                loading={props.loadingMethod ?? "lazy"} />
                : <h4
                    className={`w-10 h-10 aspect-square bg-gray-200 flex justify-center items-center rounded-full 
                        font-bold text-sm ${props.className ?? ''}`}
                    dir="auto">
                    {props.firstName?.charAt(0)}.{props.lastName?.charAt(0)}
                </h4>}
            {props.label?.name ?
                <h4 dir="auto" className={`mx-2 my-2 text-sm font-bold text-gray-500 whitespace-nowrap ${props.label?.classname}`}>
                    {props.label?.name}
                </h4> : null}
        </div>
    );
}
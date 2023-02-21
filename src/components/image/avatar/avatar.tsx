import { ImageProps } from "../image";

export interface AvatarProps extends ImageProps {
    /**
     * User label
     */
    label?: {
        /**
     * Show user name
     */
        name?: string;
        /**
         * Class name
         */
        classname?: string;
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

    return (
        <div className="flex justify-center items-center">
            <img {...props}
                alt={props.alt ?? props.label?.name ?? ''}
                title={props.label?.name ?? props.alt ?? ''}
                className={`rounded-full object-cover w-10 h-10 ${props.className ?? ''}`}
                loading={props.loadingMethod ?? "lazy"} />
            {props.label?.name ?
                <h4 className={`mx-2 text-sm font-bold text-gray-500 ${props.label?.classname}`}>
                    {props.label?.name}
                </h4> : null}
        </div>
    );
}
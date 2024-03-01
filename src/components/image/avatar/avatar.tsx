import { useMemo } from "react";
import { ImageProps } from "../image";

export interface AvatarProps extends Omit<ImageProps, "src"> {
  /**
   * User label
   */

  /**
export interface AvatarProps extends Omit<ImageProps, "src"> {
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
    place?: "bottom" | "end";
  };
  /**
   * Class name to add for the container of the image and its label
   */
  containerClassName?: string;
  /**
   * Source of the avatar image. It can be either a string representing the URL of the image or a React element.
   */
  src?: React.ReactNode;
}

/**
 * User avatar
 */
export const Avatar = (props: AvatarProps) => {
  const avatarSrc = useMemo(() => {
    if (props.src) return props.src;

    if (props.firstName && props.lastName) {
      return undefined;
    }

    return "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg";
  }, [props.src, props.firstName, props.lastName]);

  return (
    <div
      className={`flex justify-center items-center 
            ${props.label?.place === "bottom" ? "flex-col" : ""} 
            ${props.className ?? ""}`}
    >
      {typeof avatarSrc === "string" ? (
        <img
          alt={props.alt ?? props.label?.name ?? ""}
          src={avatarSrc}
          title={props.label?.name ?? props.alt ?? ""}
          className={`rounded-full object-cover w-10 h-10 aspect-square ${
            props.className ?? ""
          }`}
          loading={props.loadingMethod ?? "lazy"}
        />
      ) : (
        <div
          className={`w-10 h-10 aspect-square bg-gray-200 flex justify-center items-center rounded-full 
                    font-bold text-sm ${props.className ?? ""}`}
        >
          {avatarSrc}
        </div>
      )}
      {props.label?.name && (
        <h4
          dir="auto"
          className={`mx-2 my-2 text-sm font-bold text-gray-500 whitespace-nowrap ${props.label?.classname}`}
        >
          {props.label?.name}
        </h4>
      )}
    </div>
  );
};

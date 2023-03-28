import { IconProps } from "../iconProps";

export const NotificationsIcon = ({ size = 7.649, className }: IconProps) => {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={`${className ?? ''}`} width={size} viewBox="0 0 7.649 4.441">
            <path id="Shape"
                d="M3.825-9a.529.529,0,0,1,.379.16L7.492-5.49a.553.553,0,0,1,0,.772.529.529,0,0,1-.758,0L3.825-7.683.914-4.718a.529.529,0,0,1-.757,0,.553.553,0,0,1,0-.772L3.446-8.84A.529.529,0,0,1,3.825-9Z"
                transform="translate(7.649 -4.559) rotate(180)" />
        </svg>);
}
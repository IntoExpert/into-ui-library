import { IconProps } from "../iconProps";

export interface CircleAddIconProps extends IconProps {

};

export const CircleAddIcon = ({ size = 21, className }: CircleAddProps) =>
(<svg id="Component_605_2" className={`${className ?? ''}`} data-name="Component 605 – 2" xmlns="http://www.w3.org/2000/svg"
    width={size} height={size} viewBox="0 0 21 21">
    <g id="Ellipse_1618" data-name="Ellipse 1618" fill="none" stroke="#85a59d" stroke-width="1">
        <circle cx="10.5" cy="10.5" r="10.5" stroke="none" />
        <circle cx="10.5" cy="10.5" r="10" fill="none" />
    </g>
    <g id="Group_13086" data-name="Group 13086" transform="translate(5.523 5.522)">
        <path id="Path_72323" data-name="Path 72323" d="M-15530.8-17623h9.957" transform="translate(15530.804 17627.992)" fill="none" stroke="#85a59d" stroke-width="1.5" />
        <path id="Path_72324" data-name="Path 72324" d="M0,0H9.957" transform="translate(4.978) rotate(90)" fill="none" stroke="#85a59d" stroke-width="1.5" />
    </g>
</svg>);
import { IconProps } from "../iconProps";
export interface CircleCloseIconprops extends IconProps { }

export const CircleCloseIcon = ({ size = 21, className }: CircleCloseIconprops) => {
  return (
    <div className={`${className ?? " "}`}>
      <svg
        id="Component_606_9"
        data-name="Component 606 – 9"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 21 21"
      >
        <g
          id="Ellipse_1617"
          data-name="Ellipse 1617"
          fill="none"
          stroke="#f28382"
          strokeWidth="1"
        >
          <circle cx="10.5" cy="10.5" r="10.5" stroke="none" />
          <circle cx="10.5" cy="10.5" r="10" fill="none" />
        </g>
        <g
          id="Group_13085"
          data-name="Group 13085"
          transform="translate(-1316.66 -518.6)"
        >
          <path
            id="Path_72322"
            data-name="Path 72322"
            d="M-15530.8-17623h10.851"
            transform="translate(-155.744 23968.877) rotate(45)"
            fill="none"
            stroke="#f28382"
            strokeWidth="1.5"
          />
          <path
            id="Path_72327"
            data-name="Path 72327"
            d="M-15530.8-17623h10.851"
            transform="translate(-22111.945 -953.809) rotate(135)"
            fill="none"
            stroke="#f28382"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
};

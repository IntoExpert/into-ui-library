import { UiElementProps } from "../common";

export interface BadgeProps extends UiElementProps {
  price?: string;
  earlyBirdPrice?: string;
  soldOut?: string;
}

export const Badge = (props: BadgeProps) => {
  return (
    <div className={props?.className ?? " "}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="85.766"
        height="90.582"
        viewBox="0 0 85.766 90.582"
      >
        <path
          id="Path_71787"
          data-name="Path 71787"
          d="M0,22.807H85.766V95L43.19,113.389,0,95Z"
          transform="translate(0 -22.807)"
        />{" "}
        <text
          x="20"
          y="30"
          font-size="13"
          fill="black"
          className="font-bold line-through
          !line-through-red-500 !decoration-red-900"
        >
          {props.price}
        </text>
        <text x="10" y="60" font-size="20" fill="white" className="font-bold">
          {props.earlyBirdPrice}
        </text>
      </svg>
    </div>
  );
};

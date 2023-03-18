import { UiElementProps } from "../common";

export interface BadgeProps extends UiElementProps {
  children: string;
  price?: string;
}

export const Badge = (props: BadgeProps) => {
  return (
    <div className={props?.className ?? "fill-secondary"}>
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
      </svg>
      <h1 className="text-white relative flex bottom-12 justify-center">
        {" "}
        {props?.children}
      </h1>
      <h2 className=" relative bottom-24 w-full text-sm text-center line-through decoration-red-500 decoration-1">
        {props.price}
      </h2>
    </div>
  );
};

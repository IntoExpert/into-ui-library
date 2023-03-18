import { UiElementProps } from "../common";

export interface BadgeProps extends UiElementProps {
  children: string;
}

export const Badge = ({ className, children }: BadgeProps) => {
  return (
    <div className={`relative ${className ?? "fill-secondary"}`}>
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
      <div className={`absolute w-full top-1/2 -translate-y-1/2`}>
        <h1 className="text-white flex justify-center">
          {" "}
          {children}
        </h1>
      </div>
    </div>
  );
};

import { UiElementProps } from "../..";

export interface MoreIconProps extends UiElementProps {
  colorCSS?: string;
}

export const MoreIcon = (props: MoreIconProps) => {
  return (
    <div className={`${props.className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="4"
        height="14"
        viewBox="0 0 4 14"
      >
        <g
          id="Group_13091"
          data-name="Group 13091"
          transform="translate(23512 17365)"
        >
          <circle
            id="Ellipse_1620"
            data-name="Ellipse 1620"
            cx="2"
            cy="2"
            r="2"
            transform="translate(-23512 -17365)"
          />
          <circle
            id="Ellipse_1624"
            data-name="Ellipse 1624"
            cx="2"
            cy="2"
            r="2"
            transform="translate(-23512 -17360)"
          />
          <circle
            id="Ellipse_1625"
            data-name="Ellipse 1625"
            cx="2"
            cy="2"
            r="2"
            transform="translate(-23512 -17355)"
          />
        </g>
      </svg>
    </div>
  );
};

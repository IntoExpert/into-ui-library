import { UiElementProps } from "../../components";
export interface leftArrowProps extends UiElementProps {}

export const LeftArrow = (props: leftArrowProps) => {
  return (
    <div className={props.className ?? " "}>
      <svg
        id="Shape"
        xmlns="http://www.w3.org/2000/svg"
        width="7.5"
        height="12.916"
        viewBox="0 0 7.5 12.916"
      >
        <path
          id="Shape-2"
          data-name="Shape"
          d="M6.458-1.5A.893.893,0,0,0,7.1-1.77l5.554-5.657a.934.934,0,0,0,0-1.3.893.893,0,0,0-1.279,0L6.458-3.724,1.544-8.73a.893.893,0,0,0-1.279,0,.933.933,0,0,0,0,1.3L5.819-1.77A.893.893,0,0,0,6.458-1.5Z"
          transform="translate(-1.5) rotate(90)"
        />
      </svg>
    </div>
  );
};

import { UiElementProps } from "../../components";
export interface upArrowProps extends UiElementProps {}

export const UpArrow = (props: upArrowProps) => {
  return (
    <div className={props.className ?? " "}>
      <svg
        id="arrow-down-sign-to-navigate"
        xmlns="http://www.w3.org/2000/svg"
        width="12.916"
        height="7.5"
        viewBox="0 0 12.916 7.5"
      >
        <path
          id="Shape"
          d="M6.458-9a.894.894,0,0,1,.639.27l5.554,5.657a.934.934,0,0,1,0,1.3.893.893,0,0,1-1.279,0L6.458-6.776,1.544-1.77a.893.893,0,0,1-1.279,0,.933.933,0,0,1,0-1.3L5.819-8.73A.894.894,0,0,1,6.458-9Z"
          transform="translate(0 9)"
        />
      </svg>
    </div>
  );
};

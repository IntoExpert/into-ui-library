import { UiElementProps } from "../..";
export interface CloseIconprops extends UiElementProps { }

export const CloseIcon = (props: CloseIconprops) => {
  return (
    <div className={props.className ?? " "}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="7.777"
        height="7.778"
        viewBox="0 0 7.777 7.778"
      >
        <g
          id="Component_667_3"
          data-name="Component 667 – 3"
          transform="translate(0.354 0.354)"
        >
          <line
            id="Line_3138"
            data-name="Line 3138"
            y2="10"
            transform="translate(7.071) rotate(45)"
            fill="none"
            stroke="#fff"
            stroke-width="1"
          />
          <line
            id="Line_3139"
            data-name="Line 3139"
            x1="10"
            transform="translate(0.001) rotate(45)"
            fill="none"
            stroke="#fff"
            stroke-width="1"
          />
        </g>
      </svg>
    </div>
  );
};

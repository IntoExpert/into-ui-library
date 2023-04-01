import { UiElementProps } from "../..";
export interface PlusIconProps extends UiElementProps { }

export const PlusIcon = (props: PlusIconProps) => {
  return (
    <div className={props.className ?? " "}>
      <svg
        id="Component_605_9"
        data-name="Component 605 – 9"
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="21"
        viewBox="0 0 21 21"
      >
        <g
          id="Ellipse_1618"
          data-name="Ellipse 1618"
          fill="none"
          stroke="#85a59d"
          strokeWidth="1"
        >
          <circle cx="10.5" cy="10.5" r="10.5" stroke="none" />
          <circle cx="10.5" cy="10.5" r="10" fill="none" />
        </g>
        <g
          id="Group_13086"
          data-name="Group 13086"
          transform="translate(-1347.407 -517.888)"
        >
          <path
            id="Path_72323"
            data-name="Path 72323"
            d="M-15530.8-17623h9.957"
            transform="translate(16883.734 18151.402)"
            fill="none"
            stroke="#85a59d"
            strokeWidth="1.5"
          />
          <path
            id="Path_72324"
            data-name="Path 72324"
            d="M0,0H9.957"
            transform="translate(1357.908 523.41) rotate(90)"
            fill="none"
            stroke="#85a59d"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
};

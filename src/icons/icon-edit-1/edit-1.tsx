import { UiElementProps } from "../../components";
export interface edit1Props extends UiElementProps {}

export const Edit1 = (props: edit1Props) => {
  return (
    <div className={props.className ?? " "}>
      <svg
        id="Component_323_3"
        data-name="Component 323 – 3"
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 28 28"
      >
        <circle
          id="Ellipse_1622"
          data-name="Ellipse 1622"
          cx="14"
          cy="14"
          r="14"
          fill="#f6bd60"
        />
        <g id="pencil" transform="translate(6.598 6.357)">
          <path
            id="Path_71444"
            data-name="Path 71444"
            d="M9.143,82.473,1,90.62a.325.325,0,0,0-.085.149l-.9,3.624a.32.32,0,0,0,.389.389l3.624-.9a.32.32,0,0,0,.149-.085l8.147-8.147Zm0,0"
            transform="translate(0 -79.754)"
            fill="#fff"
          />
          <path
            id="Path_71445"
            data-name="Path 71445"
            d="M338.614,1.608,337.707.7a1.642,1.642,0,0,0-2.268,0l-1.111,1.111L337.5,4.987l1.111-1.111a1.6,1.6,0,0,0,0-2.268Zm0,0"
            transform="translate(-324.277 0)"
            fill="#fff"
          />
        </g>
      </svg>
    </div>
  );
};

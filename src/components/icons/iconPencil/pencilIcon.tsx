import { UiElementProps } from "../..";
export interface PencilIconProps extends UiElementProps { }

export const PencilIcon = (props: PencilIconProps) => {
  return (
    <div className={props.className ?? " "}>
      <svg
        id="pencil"
        xmlns="http://www.w3.org/2000/svg"
        width="14.807"
        height="14.792"
        viewBox="0 0 14.807 14.792"
      >
        <path
          id="Path_71444"
          data-name="Path 71444"
          d="M9.143,82.473,1,90.62a.325.325,0,0,0-.085.149l-.9,3.624a.32.32,0,0,0,.389.389l3.624-.9a.32.32,0,0,0,.149-.085l8.147-8.147Zm0,0"
          transform="translate(0 -80)"
          fill="#c6c6c6"
        />
        <path
          id="Path_71445"
          data-name="Path 71445"
          d="M338.614,1.608,337.707.7a1.642,1.642,0,0,0-2.268,0l-1.111,1.111L337.5,4.987l1.111-1.111a1.6,1.6,0,0,0,0-2.268Zm0,0"
          transform="translate(-324.277 -0.246)"
          fill="#c6c6c6"
        />
      </svg>
    </div>
  );
};

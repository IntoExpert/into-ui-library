import { UiElementProps } from "../../components";
export interface UserFilledIconProps extends UiElementProps {}

export const UserFilledIcon = (props: UserFilledIconProps) => {
  return (
    <div className={props.className ?? " "}>
      <svg
        id="Component_628_3"
        data-name="Component 628 – 3"
        xmlns="http://www.w3.org/2000/svg"
        width="14.893"
        height="17.583"
        viewBox="0 0 14.893 17.583"
      >
        <path
          id="Path_72354"
          data-name="Path 72354"
          d="M29.989,237.694a.641.641,0,0,1-.366-.684,6.539,6.539,0,0,1,5.369-6.243,8.11,8.11,0,0,1,1.134-.1c.672-.015,1.345-.024,2.017,0a6.543,6.543,0,0,1,6.371,6.355.622.622,0,0,1-.365.668Z"
          transform="translate(-29.622 -220.111)"
          fill="#f6bd60"
        />
        <path
          id="Path_72355"
          data-name="Path 72355"
          d="M101.6,5.89c.316.069.64.111.946.21a4.166,4.166,0,1,1-1.746-.183,1.008,1.008,0,0,0,.119-.027Z"
          transform="translate(-93.817 -5.89)"
          fill="#f6bd60"
        />
      </svg>
    </div>
  );
};

import { UiElementProps } from "../..";
export interface EyeIconProps extends UiElementProps { }

export const EyeIcon = (props: EyeIconProps) => {
  return (
    <div className={props.className ?? " "}>
      <svg
        id="eye"
        xmlns="http://www.w3.org/2000/svg"
        width="26.654"
        height="15.889"
        viewBox="0 0 26.654 15.889"
      >
        <path
          id="Path_72321"
          data-name="Path 72321"
          d="M13.327,98.725c-5.093,0-9.711,2.786-13.119,7.312a1.055,1.055,0,0,0,0,1.26c3.408,4.531,8.026,7.317,13.119,7.317s9.711-2.786,13.119-7.312a1.055,1.055,0,0,0,0-1.26C23.038,101.511,18.42,98.725,13.327,98.725Zm.365,13.538a5.606,5.606,0,1,1,5.229-5.229A5.609,5.609,0,0,1,13.692,112.263Zm-.169-2.584a3.019,3.019,0,1,1,2.819-2.819A3.014,3.014,0,0,1,13.523,109.679Z"
          transform="translate(0 -98.725)"
          fill="#fff"
        />
      </svg>
    </div>
  );
};

import { UiElementProps } from "../..";
export interface SearchIconProps extends UiElementProps { }

export const SearchIcon = (props: SearchIconProps) => {
  return (
    <div className={props.className ?? " "}>
      <svg
        id="Component_526_6"
        data-name="Component 526 – 6"
        xmlns="http://www.w3.org/2000/svg"
        width="12.037"
        height="14.079"
        viewBox="0 0 12.037 14.079"
      >
        <path
          id="Combined_Shape"
          data-name="Combined Shape"
          d="M11.337,14.079a.7.7,0,0,1-.542-.251L8.52,11.112a6,6,0,0,1-2.567.57A5.9,5.9,0,0,1,0,5.841,5.9,5.9,0,0,1,5.953,0a5.9,5.9,0,0,1,5.953,5.841A5.779,5.779,0,0,1,9.713,10.37l2.165,2.586a.678.678,0,0,1-.1.967A.711.711,0,0,1,11.337,14.079ZM5.953,1.23a4.661,4.661,0,0,0-4.7,4.611,4.661,4.661,0,0,0,4.7,4.611,4.661,4.661,0,0,0,4.7-4.611A4.661,4.661,0,0,0,5.953,1.23Z"
        />
      </svg>
    </div>
  );
};

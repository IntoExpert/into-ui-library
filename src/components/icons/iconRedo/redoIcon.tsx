import { UiElementProps } from "../..";
export interface RedoIconProps extends UiElementProps { }

export const RedoIcon = (props: RedoIconProps) => {
  return (
    <div className={props.className ?? " "}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16.84"
        height="16.879"
        viewBox="0 0 16.84 16.879"
      >
        <g
          id="Component_679_1"
          data-name="Component 679 – 1"
          transform="translate(0 0.001)"
        >
          <path
            id="Path_72406"
            data-name="Path 72406"
            d="M827.739,398.371a6.263,6.263,0,0,0-2.243-.876,6.549,6.549,0,1,0,5.266,7.4c.051-.323.048-.655.073-.983a.948.948,0,0,1,.741-.894.916.916,0,0,1,1.025.5,1.263,1.263,0,0,1,.1.508,8.419,8.419,0,1,1-9.892-8.365,8.277,8.277,0,0,1,6.041,1.212l.184.119c.005,0,.014,0,.049,0-.027-.094-.053-.18-.077-.266a.953.953,0,0,1,.606-1.181.935.935,0,0,1,1.2.559c.335.957.661,1.919.962,2.887a.92.92,0,0,1-.888,1.2c-.957.019-1.915.014-2.872,0a.919.919,0,0,1-.9-.752.931.931,0,0,1,.5-1Z"
            transform="translate(-815.863 -395.492)"
            fill="#3f94f3"
          />
        </g>
      </svg>
    </div>
  );
};

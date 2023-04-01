import { UiElementProps } from "../..";
export interface StarIconProps extends UiElementProps { }

export const StarIcon = (props: StarIconProps) => {
  return (
    <div className={props.className ?? " "}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20.016"
        height="19.147"
        viewBox="0 0 20.016 19.147"
      >
        <g
          id="Component_690_3"
          data-name="Component 690 – 3"
          transform="translate(0.615 0.601)"
        >
          <path
            id="Path_2701"
            data-name="Path 2701"
            d="M143.732,1150.446h3.384a.582.582,0,0,1,.343,1.053l-4.761,3.459a.582.582,0,0,0-.211.651l1.818,5.6a.582.582,0,0,1-.9.651l-4.76-3.459a.583.583,0,0,0-.684,0l-4.761,3.459a.582.582,0,0,1-.9-.651l1.819-5.6a.582.582,0,0,0-.038-.449.569.569,0,0,0-.174-.2l-4.76-3.459a.582.582,0,0,1,.342-1.053h5.884a.582.582,0,0,0,.554-.4l1.818-5.6a.583.583,0,0,1,1.108,0l1.818,5.6"
            transform="translate(-128.914 -1144.047)"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
          />
        </g>
      </svg>
    </div>
  );
};

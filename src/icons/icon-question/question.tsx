import { UiElementProps } from "../../components";
export interface questionProps extends UiElementProps {}

export const Question = (props: questionProps) => {
  return (
    <div className={props.className ?? " "}>
      <svg
        id="question"
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="17"
        viewBox="0 0 17 17"
      >
        <g id="Group_12755" data-name="Group 12755">
          <g id="Group_12754" data-name="Group 12754">
            <path
              id="Path_71807"
              data-name="Path 71807"
              d="M8.5,0A8.5,8.5,0,1,0,17,8.5,8.5,8.5,0,0,0,8.5,0Zm0,15.814A7.314,7.314,0,1,1,15.814,8.5,7.322,7.322,0,0,1,8.5,15.814Z"
              fill="#3f94f3"
            />
          </g>
        </g>
        <g
          id="Group_12757"
          data-name="Group 12757"
          transform="translate(7.398 10.756)"
        >
          <g id="Group_12756" data-name="Group 12756">
            <path
              id="Path_71808"
              data-name="Path 71808"
              d="M223.665,323.924a.862.862,0,0,0,0,1.723.862.862,0,0,0,0-1.723Z"
              transform="translate(-222.815 -323.924)"
              fill="#3f94f3"
            />
          </g>
        </g>
        <g
          id="Group_12759"
          data-name="Group 12759"
          transform="translate(6.189 4.232)"
        >
          <g id="Group_12758" data-name="Group 12758">
            <path
              id="Path_71809"
              data-name="Path 71809"
              d="M188.625,127.469c-1.51,0-2.2.9-2.2,1.5a.642.642,0,0,0,.671.638c.6,0,.358-.862,1.5-.862.559,0,1.007.246,1.007.761,0,.6-.627.951-1,1.264a2.048,2.048,0,0,0-.75,1.7c0,.582.157.75.615.75.548,0,.66-.246.66-.459a1.405,1.405,0,0,1,.627-1.4,2.864,2.864,0,0,0,1.253-2.047C191.008,128.263,190.057,127.469,188.625,127.469Z"
              transform="translate(-186.421 -127.469)"
              fill="#3f94f3"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

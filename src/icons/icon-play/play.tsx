import { UiElementProps } from "../../components";
export interface PlayIconProps extends UiElementProps {}

export const PlayIcon = (props: PlayIconProps) => {
  return (
    <div className={props.className ?? " "}>
      <svg
        id="Video_Play"
        data-name="Video Play"
        xmlns="http://www.w3.org/2000/svg"
        width="26.43"
        height="26.43"
        viewBox="0 0 26.43 26.43"
      >
        <path
          id="Video_Play-2"
          data-name="Video Play"
          d="M13.215,0A13.215,13.215,0,1,0,26.429,13.215,13.215,13.215,0,0,0,13.215,0Zm5.561,13.659-8.457,5.286a.592.592,0,0,1-.275.085.529.529,0,0,1-.254-.063.539.539,0,0,1-.275-.465V7.929a.539.539,0,0,1,.275-.465.518.518,0,0,1,.539,0l8.457,5.286a.518.518,0,0,1,0,.888Z"
          transform="translate(0 0)"
          fill="#000"
        />
      </svg>
    </div>
  );
};

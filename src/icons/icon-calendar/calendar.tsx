import { UiElementProps } from "../../components";

export interface calender1Props extends UiElementProps {}

export const Calender1 = (props: calender1Props) => {
  return (
    <div className={props.className ?? " "}>
      <svg
        id="calendar"
        xmlns="http://www.w3.org/2000/svg"
        width="18.543"
        height="18.543"
        viewBox="0 0 18.543 18.543"
      >
        <path
          id="Path_71748"
          data-name="Path 71748"
          d="M16.153,1.449H14.487V.579a.579.579,0,0,0-1.159,0v.869H5.215V.579a.579.579,0,0,0-1.159,0v.869H2.39A2.393,2.393,0,0,0,0,3.839V16.153a2.393,2.393,0,0,0,2.39,2.39H16.153a2.393,2.393,0,0,0,2.39-2.39V3.839A2.393,2.393,0,0,0,16.153,1.449ZM2.39,2.608H4.056v.579a.579.579,0,0,0,1.159,0V2.608h8.113v.579a.579.579,0,0,0,1.159,0V2.608h1.666a1.233,1.233,0,0,1,1.231,1.231V5.215H1.159V3.839A1.233,1.233,0,0,1,2.39,2.608ZM16.153,17.384H2.39a1.233,1.233,0,0,1-1.231-1.231V6.374H17.384v9.779A1.233,1.233,0,0,1,16.153,17.384Z"
          fill="#f6bd60"
        />
      </svg>
    </div>
  );
};

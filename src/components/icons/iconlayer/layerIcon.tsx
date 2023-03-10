import { UiElementProps } from "../..";
export interface LayerIconProps extends UiElementProps { }

export const LayerIcon = (props: LayerIconProps) => {
  return (
    <div className={props.className ?? " "}>
      <svg
        id="layer1"
        xmlns="http://www.w3.org/2000/svg"
        width="17.746"
        height="12.676"
        viewBox="0 0 17.746 12.676"
      >
        <path
          id="rect1137"
          d="M2.429,290.121a1.907,1.907,0,0,0-1.9,1.9v8.871a1.913,1.913,0,0,0,1.9,1.905H16.372a1.917,1.917,0,0,0,1.9-1.905V292.02a1.912,1.912,0,0,0-1.9-1.9Zm0,1.263H16.372a.623.623,0,0,1,.636.636v1.9H1.8v-1.9a.619.619,0,0,1,.631-.636Zm-.631,3.8H17.008v5.7a.623.623,0,0,1-.636.636H2.429a.619.619,0,0,1-.631-.636Zm10.71,3.173a.635.635,0,1,0,.061,1.268H15.1a.634.634,0,1,0,0-1.268H12.568q-.03,0-.061,0Z"
          transform="translate(-0.529 -290.121)"
          fill="#3f94f3"
        />
      </svg>
    </div>
  );
};

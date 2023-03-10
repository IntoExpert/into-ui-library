import { UiElementProps } from "../..";
export interface EmailIconProps extends UiElementProps { }

export const EmailIcon = (props: EmailIconProps) => {
  return (
    <div className={props.className ?? " "}>
      <svg
        id="email"
        xmlns="http://www.w3.org/2000/svg"
        width="18.443"
        height="14.057"
        viewBox="0 0 18.443 14.057"
      >
        <path
          id="Path_3329"
          data-name="Path 3329"
          d="M10.72,95.546V86.7a.468.468,0,0,1,.08.037l7.486,5.217a2.681,2.681,0,0,0,3.3.01q3.7-2.574,7.4-5.152c.052-.037.107-.071.183-.121v.154q0,4.215,0,8.431a2.013,2.013,0,0,1-.054.465,1.711,1.711,0,0,1-1.735,1.343q-3.683,0-7.365,0-3.746,0-7.491,0a1.734,1.734,0,0,1-1.278-.505A2.034,2.034,0,0,1,10.72,95.546Z"
          transform="translate(-10.72 -83.027)"
          fill="#f6bd60"
        />
        <path
          id="Path_3330"
          data-name="Path 3330"
          d="M10.71,7.376c.03-.1.055-.194.089-.289A1.7,1.7,0,0,1,12.433,6c.354,0,.708,0,1.062,0q6.922,0,13.844,0a1.8,1.8,0,0,1,1.368.531,1.477,1.477,0,0,1-.285,2.33c-1.12.715-2.253,1.413-3.381,2.119l-4.026,2.518a1.8,1.8,0,0,1-2.168,0c-2.365-1.479-4.726-2.965-7.1-4.432A1.981,1.981,0,0,1,10.71,7.815Q10.711,7.6,10.71,7.376Z"
          transform="translate(-10.708 -5.995)"
          fill="#f6bd60"
        />
      </svg>
    </div>
  );
};

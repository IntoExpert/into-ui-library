import { UiElementProps } from "../../components";
export interface HeartIconProps extends UiElementProps {}

export const HeartIcon = (props: HeartIconProps) => {
  return (
    <div className={props.className ?? " "}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21.41"
        height="19.218"
        viewBox="0 0 21.41 19.218"
      >
        <g
          id="Component_528_3"
          data-name="Component 528 – 3"
          transform="translate(0.5 0.509)"
        >
          <path
            id="Path_3282"
            data-name="Path 3282"
            d="M93,244.494c.067-.4.1-.8.207-1.192a5.543,5.543,0,0,1,3.786-4.191,5.192,5.192,0,0,1,5.678,1.532c.186.2.352.412.537.631.178-.211.345-.424.528-.622a5.208,5.208,0,0,1,3.2-1.756,5.329,5.329,0,0,1,4.992,1.882,6.316,6.316,0,0,1,1.388,5.3,7.444,7.444,0,0,1-1.5,3.322,22.627,22.627,0,0,1-3.386,3.478q-2.165,1.884-4.345,3.751a1.189,1.189,0,0,1-1.692.038c-1.892-1.641-3.789-3.277-5.658-4.944a14.256,14.256,0,0,1-2.5-2.861,7.154,7.154,0,0,1-1.2-3.314,1.026,1.026,0,0,0-.029-.134Zm10.2,11.3c.048-.038.074-.059.1-.08,1.628-1.408,3.267-2.8,4.881-4.227a16.772,16.772,0,0,0,2.994-3.268,5.666,5.666,0,0,0,1-3.926,4.636,4.636,0,0,0-2.234-3.649,4.054,4.054,0,0,0-4-.2,4.9,4.9,0,0,0-1.9,1.746c-.045.066-.086.134-.13.2a.774.774,0,0,1-1.408.009,8.863,8.863,0,0,0-.8-1.035,3.957,3.957,0,0,0-2.763-1.331,4.4,4.4,0,0,0-4.429,3.066,5.665,5.665,0,0,0,.726,5.109,13.76,13.76,0,0,0,2.321,2.645c1.351,1.219,2.731,2.407,4.1,3.605C102.164,254.908,102.68,255.345,103.2,255.794Z"
            transform="translate(-93 -238.821)"
            fill="#fdb901"
            stroke="#fdb901"
            stroke-width="1"
          />
        </g>
      </svg>
    </div>
  );
};

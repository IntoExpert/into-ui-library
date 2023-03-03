import { UiElementProps } from "../../components";
export interface FacebookIconProps extends UiElementProps {}

export const FacebookIcon = (props: FacebookIconProps) => {
  return (
    <div className={props.className ?? " "}>
      <svg
        id="Component_623_3"
        data-name="Component 623 – 3"
        xmlns="http://www.w3.org/2000/svg"
        width="12.973"
        height="20.781"
        viewBox="0 0 12.973 20.781"
      >
        <path
          id="Path_9811"
          data-name="Path 9811"
          d="M12.935,28c0-.087-.012-.174-.012-.263V18.53H9.09V14.835h3.833v-.262c0-.966-.024-1.936.024-2.9a4.229,4.229,0,0,1,1.463-3.1,5.545,5.545,0,0,1,2.752-1.224,12.633,12.633,0,0,1,2.6-.107c.707.022,1.414.074,2.119.112.055,0,.111.017.178.027v3.294c-.085,0-.17,0-.255,0-.871.01-1.744,0-2.612.037-1.028.044-1.608.518-1.653,1.377-.044.891-.016,1.785-.018,2.677,0,.012.01.023.028.059h4.366c-.192,1.243-.382,2.457-.572,3.695H17.541c-.008.079-.02.138-.02.195V27.86c0,.047.008.094.012.141Q15.23,28,12.935,28Z"
          transform="translate(-9.09 -7.222)"
          fill="#f6bd60"
        />
      </svg>
    </div>
  );
};

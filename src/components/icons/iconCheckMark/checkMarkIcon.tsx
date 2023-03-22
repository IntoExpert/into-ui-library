import { IconProps } from "../iconProps";

export interface CheckMarkIconProps extends IconProps { }

export const CheckMarkIcon = ({ className, size = 20 }: CheckMarkIconProps) => {
  return (
    <div className={className ?? " "}>
      <svg
        id="Component_633_7"
        data-name="Component 633 – 7"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 20 20"
      >
        <circle
          id="Ellipse_1626"
          data-name="Ellipse 1626"
          cx="10"
          cy="10"
          r="10"
        />
        <path
          id="Path_72357"
          data-name="Path 72357"
          d="M9130.971,265.917l3.424,3.424,5.5-5.5"
          transform="translate(-9125.433 -256.591)"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
      </svg>
    </div >
  );
};

import { IconProps } from "../iconProps";
export interface UserSolidIconProps extends IconProps { }

export const UserSolidIcon = ({ className = '', size = 20 }: UserSolidIconProps) => {
  return (
    <svg className={`${className}`} xmlns="http://www.w3.org/2000/svg" width={size} viewBox="0 0 104 118.329">
      <g id="Layer_2_00000112603577667411075930000017146216991371991182_" transform="translate(-31)">
        <g id="Layer_1-2" transform="translate(31 0)">
          <g id="_03.User">
            <path id="Path_72323" data-name="Path 72323" d="M83,266a51.989,51.989,0,0,1,52,52,4.853,4.853,0,0,1-4.853,4.853H35.853A4.853,4.853,0,0,1,31,318,51.989,51.989,0,0,1,83,266Z" transform="translate(-31 -204.524)" fill="#3f94f3" />
            <circle id="Ellipse_1621" data-name="Ellipse 1621" cx="29.582" cy="29.582" r="29.582" transform="translate(21.573)" fill="#3f94f3" />
          </g>
        </g>
      </g>
    </svg>
  );
};

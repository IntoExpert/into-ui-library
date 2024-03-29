import { IconProps } from "../iconProps";

export interface CalendarIconDaySelectedProps extends IconProps { }

export const CalendarIconDaySelected = (
  { size = 13, className }: CalendarIconDaySelectedProps
) => {
  return (
    <div className={className ?? " "}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 12.961 12.959"
      >
        <g
          id="Group_13327"
          data-name="Group 13327"
          transform="translate(-755.657 -335.73)"
        >
          <path
            id="Path_72403"
            data-name="Path 72403"
            d="M768.408,337.884a1.967,1.967,0,0,0-1.752-1.138c-.234-.013-.47,0-.72,0,0-.162,0-.312,0-.463a.508.508,0,1,0-1.012,0c0,.147,0,.294,0,.448h-2.3c0-.154,0-.3,0-.455a.507.507,0,1,0-1.012,0c0,.151,0,.3,0,.46H759.33c0-.163,0-.33,0-.5a.5.5,0,0,0-1.009-.012c-.006.167,0,.335,0,.516-.226,0-.44,0-.654,0a2.017,2.017,0,0,0-1.96,1.625,2.409,2.409,0,0,0-.042.477c0,2.581.007,5.162-.006,7.743a2.052,2.052,0,0,0,1.757,2.081.157.157,0,0,1,.044.021h9.364a4.524,4.524,0,0,0,.631-.2,1.967,1.967,0,0,0,1.144-1.541.268.268,0,0,1,.023-.056v-8.353A4.243,4.243,0,0,0,768.408,337.884Zm-1.848,9.792q-4.422,0-8.843,0a1.13,1.13,0,0,1-.474-.109,1,1,0,0,1-.569-.977q0-3.676,0-7.352c0-.152,0-.3,0-.456a.981.981,0,0,1,.77-.985,6.067,6.067,0,0,1,.875-.054c0,.18,0,.331,0,.482a.507.507,0,1,0,1.012-.005c0-.151,0-.3,0-.454h2.278c0,.155,0,.3,0,.449a.508.508,0,1,0,1.012,0c0-.15,0-.3,0-.449h2.3c0,.169,0,.329,0,.489a.493.493,0,0,0,.238.435.5.5,0,0,0,.771-.415c.007-.171,0-.342,0-.515.251,0,.483-.012.713,0a1.056,1.056,0,0,1,.387.1,1,1,0,0,1,.571.964c0,1.729,0,6.04,0,7.769,0,.022,0,.045,0,.067s0,.018,0,.028A1.007,1.007,0,0,1,766.559,347.676Z"
            transform="translate(0)"
            fill="#fff"
          />
          <path
            id="Path_72404"
            data-name="Path 72404"
            d="M978.517,558.244c0-.215-.012-.431,0-.645a.975.975,0,0,1,.925-.95,10.5,10.5,0,0,1,1.352,0,.979.979,0,0,1,.928.988q.017.607,0,1.214a.979.979,0,0,1-.928.988,10.35,10.35,0,0,1-1.352,0,.987.987,0,0,1-.93-1.013c0-.194,0-.388,0-.582Zm2.19.589v-1.174h-1.174v1.174Z"
            transform="translate(-215.792 -213.895)"
            fill="#fff"
          />
        </g>
      </svg>
    </div>
  );
};

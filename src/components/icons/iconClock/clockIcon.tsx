import { IconProps } from "../iconProps";

export const ClockIcon = ({ size = 12, className = '' }: IconProps) => {
  return (
    <div className={`${className}`}>
      <svg
        id="Component_562_3"
        data-name="Component 562 – 3"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        viewBox="0 0 11.6 11.602"
      >
        <path
          id="Path_68671"
          data-name="Path 68671"
          d="M14.769,19.185h-.5a.915.915,0,0,0-.11-.019,4.867,4.867,0,0,1-1.214-.2A5.736,5.736,0,0,1,8.812,14.34c-.046-.217-.062-.439-.092-.659v-.725c.026-.19.046-.38.078-.569a5.558,5.558,0,0,1,1.854-3.325,5.8,5.8,0,0,1,9.65,4.681,5.874,5.874,0,0,1-1.661,3.713,5.493,5.493,0,0,1-3.3,1.665C15.151,19.146,14.96,19.164,14.769,19.185Zm-.25-.936A4.766,4.766,0,0,0,19.4,13.361a4.883,4.883,0,0,0-9.766,0A4.769,4.769,0,0,0,14.519,18.249Z"
          transform="translate(-8.72 -7.583)"
        />
        <path
          id="Path_68672"
          data-name="Path 68672"
          d="M179.526,81.928c0,.6,0,1.207,0,1.811a.809.809,0,0,0,.091.259q.113.283.23.564a.678.678,0,0,0,.1.22c.646.654,1.3,1.3,1.946,1.953a.653.653,0,0,1-.379,1.121.676.676,0,0,1-.582-.234c-.625-.629-1.254-1.254-1.879-1.883a.42.42,0,0,0-.278-.138.923.923,0,0,1-.821-.626.947.947,0,0,1,.191-1.017.337.337,0,0,0,.063-.2c0-1.218,0-2.436,0-3.654a.649.649,0,0,1,.884-.653.641.641,0,0,1,.421.636C179.528,80.7,179.526,81.314,179.526,81.928Z"
          transform="translate(-173.535 -78.214)"
        />
      </svg>
    </div>
  );
};

export default ClockIcon;

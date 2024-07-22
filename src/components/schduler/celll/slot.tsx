import { ReactElement } from "react";
import { UiElementProps } from "../../common";

import { Avatar, AvatarProps } from "../../image";


export interface SlotsProps extends UiElementProps {
  status?: string;
  title?: string;
  avatar?: AvatarProps;
  textColor?: string;
  dropdownMenu?: ReactElement;
  isTrail?: boolean;
  isMonthlyView?: boolean;
}

export const Slot: React.FC<SlotsProps> = ({
  className,
  status,
  title,
  textColor,
  avatar,
  dropdownMenu,
  isTrail,
  isMonthlyView,
}) => {
  return (
    <div className={`m-0 px-2 h-full ${className}`}>
      <div
        className={` py-1 text-surface text-xs flex items-center gap-1 w-full  `}
      >
        {status && !isTrail && (
          <div
            className={`slot-status text-xs flex h-5  w-full justify-between ${status.toLowerCase()}`}
          >
            <div className="flex">
              <span
                className={`relative w-2 h-2 bg-surface rounded-full my-1 `}
              >
                <span
                  className={`absolute w-2 h-2  bg-surface rounded-full `}
                ></span>
              </span>
              <span className={` ${textColor}  pl-3 `}>{status}</span>
            </div>
            {dropdownMenu ? dropdownMenu : ""}
          </div>
        )}
      </div>
      {title && <div className="slot-title text-sm ">{title}</div>}

      {avatar && isTrail && !isMonthlyView ? (
        <Avatar
          label={{ name: avatar.firstName }}
          src={avatar.src ?? ""}
          alt={avatar.alt}
          firstName={avatar.firstName}
          lastName={avatar.lastName}
          className="!justify-start"
        />
      ) : (
        <p className={`" flex justify-end text-xs ${textColor} "`}>
          {isTrail ? "Trail" : ""}
        </p>
      )}
    </div>
  );
};

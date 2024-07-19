import { UiElementProps } from "../../common";
import { Dropdown, DropdownMenuProps } from "../../dropdown";
import { Avatar, AvatarProps } from "../../image";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface SlotsProps extends UiElementProps {
  status?: string;
  title?: string;
  avatar?: AvatarProps;
  textColor?: string;
  dropdownMenu?: DropdownMenuProps;
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
              <span className={` ${textColor}   pl-3 `}>{status}</span>
            </div>
            {dropdownMenu ? (
              <Dropdown
                icon={
                  <div className={``}>
                    <FontAwesomeIcon
                      size="xs"
                      className={` text-gray-500`}
                      icon={faEllipsisVertical}
                    />
                  </div>
                }
                className=" w-2 h-4"
                menu={dropdownMenu}
              />
            ) : (
              ""
            )}
          </div>
        )}
      </div>
      {title && <div className="slot-title text-sm ">{title}</div>}

      {avatar && !isTrail && !isMonthlyView ? (
        <Avatar
          label={{ name: avatar.firstName }}
          src={avatar.src ?? ""}
          alt={avatar.alt}
          firstName={avatar.firstName}
          lastName={avatar.lastName}
          className="!justify-start"
        />
      ) : (
        <p className={`" flex justify-end text-xs ${textColor} "`}>Trail</p>
      )}
    </div>
  );
};

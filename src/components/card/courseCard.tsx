import { AvatarProps, ImageProps } from "../image";
import { CardProps } from "./card";
import { Card } from "./card";
import { Dropdown } from "../dropdown";
import { More } from "../../icons/icon-more/more";
import { Edit } from "../../icons/icon-edit/edit";
import { Delete } from "../../icons/icon-delete/delete";
import { Avatar } from "../image";
import { State, stateProps } from "../badge/state";
import { Badge, badgeProps } from "../badge/badge";
import { Badgebg } from "../../icons/icon-badge/badge-bg";
import { DropdownProps } from "../dropdown";
export interface CourseCardProps extends CardProps {
  media: ImageProps;
  avatar: AvatarProps;
  state: stateProps;
  badge: badgeProps;
  dropdown: DropdownProps;
}

export const CourseCard = ({
  media,
  children,
  className,
  avatar,
  state,
  badge,
  dropdown,
}: CourseCardProps) => {
  return (
    <Card className={`${className ?? ""}`}>
      <div className="">
        <div className={``}>
          <img
            {...media}
            alt={media.alt ?? ""}
            className={`w-full aspect-video object-cover ${className ?? ""}`}
          ></img>
        </div>
        <div className=" relative flex bottom-36 px-2 my-2 justify-between">
          <Dropdown
            icon={
              <More className="group group-hover:!fill-primary !fill-white group-focus:!fill-primary " />
            }
            className=" group  z-10 bg-primary hover:bg-primaryVariant focus:bg-primaryVariant rounded-3xl  w-6 h-6 shadow-md"
            menu={dropdown.menu}
          />
          <Badge
            {...badge}
            price={badge?.price}
            earlyBirdPrice={badge?.earlyBirdPrice}
            className="bottom-2 relative"
          />
        </div>
        <div className="relative bottom-20 flex justify-between px-2 ">
          <div className="sm:truncate md:truncate">
            <Avatar
              {...avatar}
              src={avatar?.src}
              label={avatar?.label}
              className="!text-black"
            />
          </div>
          <div className="py-1">
            <State
              {...state}
              className="!border-red-400 text-red-400 relative text-sm"
            />
          </div>
        </div>

        {children}
      </div>
    </Card>
  );
};

import { Dropdown, DropdownProps } from "../dropdown";
import { ImageProps } from "../image";
import { Card, CardProps } from "./card";
import { MoreIcon } from "../icons";

import { Badge, BadgeProps } from "../badge/badge";
export interface MediaCardProps extends CardProps {
  media: ImageProps;
  badge: BadgeProps;
  dropdown?: DropdownProps;
}

export const MediaCard = ({
  media,
  children,
  className,
  badge,
  dropdown,
  dir = 'ltr'
}: MediaCardProps) => {
  return (
    <Card className={`${className ?? ""}`}>
      <div className="relative ">
        <div className={``}>
          <img
            {...media}
            alt={media.alt ?? ""}
            className={`w-full aspect-video object-cover ${className ?? ""}`}
          ></img>
        </div>
        <div className=" flex px-2 my-2 justify-between">
          <div className={`absolute top-0 px-2 py-2 ${dir === 'rtl' ? 'right-0' : 'left-0'}`}>
            {dropdown ? (
              <Dropdown
                icon={
                  <MoreIcon className="group group-hover:!fill-primary !fill-white shadow-md" />
                }
                className=" group  z-10 bg-primary hover:bg-primaryVariant rounded-3xl  w-6 h-6"
                menu={dropdown.menu}
              />
            ) : (
              " "
            )}
          </div>
          <div className={`absolute top-0 px-2 ${dir === 'rtl' ? 'left-2' : 'right-2'}`}>
            {badge ? (
              <Badge
                {...badge}
                children={badge.children}
                className={`bottom-2 relative ${badge.className ?? 'fill-secondary'} w-20`}
              />
            ) : (
              " "
            )}
          </div>
        </div>

        {children}
      </div>
    </Card>
  );
};

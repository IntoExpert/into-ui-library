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
          <div className="absolute top-0 left-0 px-2 py-2">
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
          <div className="absolute top-0 right-0 px-2 ">
            {badge ? (
              <Badge
                {...badge}
                price={badge?.price}
                children={badge.children}
                className="bottom-2 relative fill-secondary"
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

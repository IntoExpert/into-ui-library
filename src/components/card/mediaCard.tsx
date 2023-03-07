import { Dropdown } from "../dropdown";
import { ImageProps } from "../image";
import { Card, CardProps } from "./card";
import { MoreIcon, EditIcon, DeleteIcon } from "../../icons";

import { Badge, BadgeProps } from "../badge/badge";
export interface MediaCardProps extends CardProps {
  media: ImageProps;
  badge: BadgeProps;
}

export const MediaCard = ({
  media,
  children,
  className,
  badge,
}: MediaCardProps) => {
  const items = {
    className: "top-11  ",
    items: [
      {
        icon: <EditIcon className=" flex" />,
        link: {
          className: "flex ",
          children: "Edit",
        },
      },
      {
        icon: <DeleteIcon className=" flex" />,

        link: {
          className: "flex",

          children: "Delete",
        },
      },
    ],
  };

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
        <div className="relative flex bottom-36 px-2 my-2 justify-between">
          <Dropdown
            icon={
              <MoreIcon className="group group-hover:!fill-primary !fill-white" />
            }
            className=" group  z-10 bg-primary hover:bg-primaryVariant rounded-3xl  w-6 h-6"
            menu={items}
          />
          <Badge
            {...badge}
            price={badge?.price}
            earlyBirdPrice={badge?.earlyBirdPrice}
            className="bottom-2 relative"
          />
        </div>

        {children}
      </div>
    </Card>
  );
};
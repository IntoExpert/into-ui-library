import { Dropdown } from "../dropdown";
import { ImageProps } from "../image";
import { Card, CardProps } from "./card";
import { More } from "../../icons/icon-more/more";
import { Edit } from "../../icons/icon-edit/edit";
import { Delete } from "../../icons/icon-delete/delete";
import { Badge, badgeProps } from "../badge/badge";
export interface MediaCardProps extends CardProps {
  media: ImageProps;
  badge: badgeProps;
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
        icon: <Edit className=" flex" />,
        link: {
          className: "flex ",
          children: "Edit",
        },
      },
      {
        icon: <Delete className=" flex" />,

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
        <div className=" relative flex bottom-36 px-2 my-2 justify-between">
          <Dropdown
            icon={
              <More className="group group-hover:!fill-primary !fill-white" />
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

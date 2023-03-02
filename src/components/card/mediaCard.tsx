import { Dropdown } from "../dropdown";
import { ImageProps } from "../image";
import { Card, CardProps } from "./card";
import { More } from "../../icons/icon-more/more";
import { Edit } from "../../icons/icon-edit/edit";
import { Delete } from "../../icons/icon-delete/delete";
export interface MediaCardProps extends CardProps {
  media: ImageProps;
}

export const MediaCard = ({ media, children, className }: MediaCardProps) => {
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
        <div className="">
          <Dropdown
            icon={
              <More className="group group-hover:!fill-primary !fill-white" />
            }
            className="relative group bottom-36 left-2 my-2 z-10 bg-primary hover:bg-primaryVariant rounded-3xl "
            menu={items}
          />
        </div>

        {children}
      </div>
    </Card>
  );
};

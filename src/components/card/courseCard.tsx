import { AvatarProps, ImageProps } from "../image";
import { CardProps } from "./card";
import { Card } from "./card";
import { Dropdown } from "../dropdown";
import { More } from "../../icons/icon-more/more";
import { Edit } from "../../icons/icon-edit/edit";
import { Delete } from "../../icons/icon-delete/delete";
import { Avatar } from "../image";
import { State, stateProps } from "../badge/state";

export interface CourseCardProps extends CardProps {
  media: ImageProps;
  avatar: AvatarProps;
  state: stateProps;
}

export const CourseCard = ({
  media,
  children,
  className,
  avatar,
  state,
}: CourseCardProps) => {
  const items = {
    className: "top-9  ",
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
            className="relative group bottom-36 left-2 my-2 z-10 bg-primary hover:bg-primaryVariant rounded-3xl  w-6 h-6"
            menu={items}
          />
        </div>
        <div className="relative bottom-5 flex justify-between px-2">
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

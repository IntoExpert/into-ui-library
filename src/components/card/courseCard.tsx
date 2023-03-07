import { AvatarProps, ImageProps } from "../image";
import { CardProps } from "./card";
import { Card } from "./card";

import { Avatar } from "../image";
import { State, StateProps } from "../badge/state";

import { MediaCard, MediaCardProps } from "./mediaCard";
import { ReactElement } from "react";
import { RatingStar1 } from "../../stories/rating/star.stories";
import { RatingStarsProps } from "../rating";
export interface CourseCardProps extends CardProps {
  mediaCard: MediaCardProps;
  avatar?: AvatarProps;
  state?: StateProps;
  title?: ReactElement;
  description?: ReactElement;
  duration?: ReactElement;
  deadline?: ReactElement;
  rating?: RatingStarsProps;
  numberOfRatings?: ReactElement;
}

export const CourseCard = ({
  mediaCard,
  title,
  className,
  avatar,
  state,
  description,
  duration,
  deadline,
  rating,
  numberOfRatings,
}: CourseCardProps) => {
  return (
    <Card className={`${className ?? ""}`}>
      <div className="">
        <div>
          <MediaCard {...mediaCard} className="shadow-none" />
        </div>
        <div className="flex justify-between px-2 relative">
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
              className="!border-red-400 text-red-400 relative text-sm px-2 py-1"
            />
          </div>
        </div>

        <div className="px-2 py-2">{title}</div>
        <div className="px-2 py-2 text-gray-500">{description}</div>
        <div className="px-2 py-2 text-primary">
          <strong>{duration}</strong>
        </div>
        <div className="px-2 py-2 text-red-400">{deadline}</div>
        <div className="flex px-2 py-3">
          <RatingStar1 {...rating} />

          <div className="px-2 text-gray-500">
            <strong>{rating?.value}</strong>
          </div>
          <div className="text-gray-500"> {numberOfRatings}</div>
        </div>
      </div>
    </Card>
  );
};

import { AvatarProps } from "../image";
import { CardProps } from "./card";
import { Card } from "./card";

import { StateProps } from "../badge/state";

import { MediaCard, MediaCardProps } from "./mediaCard";
import { ReactElement } from "react";
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
  courseCardChildren: ReactElement;
}

export const CourseCard = ({
  mediaCard,
  className,
  courseCardChildren,
  dir = "ltr",
}: CourseCardProps) => {
  return (
    <Card className={`pb-4 ${className ?? ""}`}>
      <div className="">
        <div>
          <MediaCard {...mediaCard} className="shadow-none" dir={dir} />
        </div>
        {courseCardChildren}
      </div>
    </Card>
  );
};

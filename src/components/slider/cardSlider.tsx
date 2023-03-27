import { UiElementProps } from "../common";
import Slider from "react-slick";
import { CourseCardProps, CourseCard } from "../card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export interface CardSliderProps extends UiElementProps {
  courseCard?: CourseCardProps[];
}

export const CardSlider = (props: CardSliderProps) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrow: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={` shadow rounded-lg ${props.className ?? ""}`}>
      <h1 className="text-primary text-lg p-4">
        <strong>Online Courses</strong>
      </h1>
      <Slider className="pb-5 w-full flex" {...settings}>
        {props.courseCard?.map((items) => (
          <div className=" flex justify-between px-5 pb-1">
            <CourseCard className="w-full shadow " {...items} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

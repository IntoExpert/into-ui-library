import { UiElementProps } from "../../common";
// import Slider from "react-slick";
import { useState } from "react";
/* import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; */

export interface AvailabilityFormProps extends UiElementProps {
  children?: string;
  timezone?: string;
  availability?: {
    day?: string;
    data?: string[];
  }[];
}

export const AvailabilityForm = (props: AvailabilityFormProps) => {
  const [selectedItem, setSelectedItem] = useState(null);
  /* const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    initialSlide: 0,
  }; */
  /* function handleItemClick(item) {
    setSelectedItem(item);
  } */
  return (
    <div className={`shadow rounded-lg ${props.className ?? " "}`}>
      <p>{ }</p>
      <h1 className=" text-primary text-lg p-4">
        <strong>{props.children}</strong>
      </h1>
      <div className="">
        {/* <Slider className="px-14" {...settings}>
          {props.availability?.map((items) => (
            <li
              className="  hover:text-red-400 focus:text-red-400 focus:underline"
              onClick={() => handleItemClick(items)}
            >
              {items.day}
            </li>
          ))}
        </Slider> */}
        {selectedItem && (
          <div className="  px-14">
            <p className="flex justify-center py-5 text-gray-400">
              {props.timezone}
            </p>
            <div className=" flex flex-wrap ">
              {/*  {selectedItem.data?.map((item) => (
                <div className=" pr-3 py-3">
                  <p className="bg-primary bg-opacity-20 text-primary px-14 py-3 rounded-lg">
                    {item}
                  </p>
                </div>
              ))} */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

import {
  TitleAndDiscription,
  TitleAndDiscriptionProps,
} from "../../titleDescription";
import { ReactElement } from "react";

export interface ExperienceProps extends TitleAndDiscriptionProps {
  body?: {
    title?: string;
    companyName?: string;
    duration?: string;
    location?: string;
    discription?: string;
  }[];
}

export const Experience = (props: ExperienceProps) => {
  return (
    <div className={`shadow rounded-lg ${props.className ?? " "}`}>
      <TitleAndDiscription title={props.title} className={"shadow-none"} />
      {props.body?.map((item) => (
        <div className="text-[10px] ">
          {" "}
          <div className="flex justify-between px-3 pb-3 pt-2">
            <div className="w-1/4">
              <strong className="py-2">{item.title}</strong>
              <p>{item.companyName}</p>
              <p className="text-gray-600"> {item.duration}</p>
              <p className="text-gray-600">{item.location}</p>
            </div>
            <div className="border-gray-200 border-l mb-1"></div>
            <div className="text-[10px] w-3/4 px-2">{item.discription}</div>
          </div>
          <hr className="mx-3"></hr>
        </div>
      ))}
    </div>
  );
};

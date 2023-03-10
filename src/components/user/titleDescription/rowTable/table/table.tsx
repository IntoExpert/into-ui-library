import {
  TitleAndDiscription,
  TitleAndDiscriptionProps,
} from "../../titleDescription";
import { ReactElement } from "react";

export interface TableProps extends TitleAndDiscriptionProps {
  body?: {
    title?: string;
    subTitle?: string;
    description?: string;
    anotherDescription?: string;
    coloumn?: string;
  }[];
}

export const Table = (props: TableProps) => {
  return (
    <div className={`shadow rounded-lg ${props.className ?? " "}`}>
      <TitleAndDiscription title={props.title} className={"shadow-none"} />
      {props.body?.map((item) => (
        <div className="text-[10px] ">
          {" "}
          <div className="flex justify-between px-3 pb-3 pt-2">
            <div className="w-1/4">
              <strong className="py-2">{item.title}</strong>
              <p>{item.subTitle}</p>
              <p className="text-gray-600"> {item.description}</p>
              <p className="text-gray-600">{item.anotherDescription}</p>
            </div>
            <div className="border-gray-200 border-l mb-1"></div>
            <div className="text-[10px] w-3/4 px-2">{item.coloumn}</div>
          </div>
          <hr className="mx-3"></hr>
        </div>
      ))}
    </div>
  );
};

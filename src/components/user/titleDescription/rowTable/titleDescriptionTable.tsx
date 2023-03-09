import { ReactElement } from "react";
import { UiElementProps } from "../../../common";
import {
  TitleAndDiscription,
  TitleAndDiscriptionProps,
} from "../titleDescription";

export interface TitleAndTableProps extends TitleAndDiscriptionProps {
  numberOfRows?: number;

  body?: {
    title?: string;
    subTitle?: string;
    description?: string;
    icon?: ReactElement;
    iconDescription?: string;
  }[];
}
export const TitleAndTable = (props: TitleAndTableProps) => {
  return (
    <div className="shadow rounded-lg">
      <TitleAndDiscription title={props.title} className="shadow-none" />
      {props.body?.map((item) => (
        <div className="text-[10px]">
          {" "}
          <div className="flex justify-between px-3 pb-3 pt-2">
            <div>
              <strong className="py-2">{item.title}</strong>
              <p>{item.subTitle}</p>
              <p> {item.description}</p>
            </div>
            <div className="flex my-auto">
              {item.icon}{" "}
              <p className="text-primary px-2">
                {" "}
                <strong>{item.iconDescription}</strong>
              </p>
            </div>
          </div>
          <hr></hr>
        </div>
      ))}
    </div>
  );
};

import { ReactElement, ReactNode } from "react";
import { UiElementProps } from "../common";
import { Avatar } from "../image";
import { Card } from "./card";

export interface TutorSchoolCardProps extends UiElementProps {
  src?: string;
  name?: string;
  status?: string;
  textColor?: string;
  bgClassName?: string;
  id?: string;
  branch?: string;
  subject?: string;
  children?: ReactNode;
}

export const TutorSchoolCard = ({
  className,
  src,
  name,
  status,
  textColor,
  bgClassName,
  id,
  branch,
  subject,
  children,
}: TutorSchoolCardProps) => {
  return (
    <div className="max-w-xs relative  rounded-lg  bg-surface drop-shadow ">
      <div className="flex justify-center absolute w-full -top-10  overflow ">
        <div className="border-4 border-secondary rounded-full ">
          <Avatar src={src} className="  w-20 h-20" />
        </div>
      </div>
      <div>
        <div className="px-1 py-2">
          <div
            className={`slot-status text-xs flex h-5  w-full justify-between ${status?.toLowerCase()}`}
          >
            <div className="flex">
              <span
                className={`relative w-2 h-2 ${textColor}  ${bgClassName} rounded-full my-1 `}
              >
                <span
                  className={`absolute w-2 h-2  ${textColor}  ${bgClassName} rounded-full `}
                ></span>
              </span>
              <span className={`  ${textColor} pl-3 `}>{status}</span>
            </div>
          </div>
        </div>
        <div className="pt-5 pb-4">
          <h4 className="text-center font-bold">{name}</h4>
          <h4 className="text-sm text-center font-thin">{id}</h4>
        </div>
        <div className="border-b border-t py-1 px-3 flex justify-between">
          <p className={`${textColor}`}>{branch}</p>
          <p className={`text-red-400 `}>{subject}</p>
        </div>
        <div className=" py-1 px-3 flex justify-center">
          <>{children}</>
        </div>
      </div>
    </div>
  );
};

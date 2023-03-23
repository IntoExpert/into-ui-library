import { ReactElement } from "react";
import { Biography, BiographyProps } from "./biography";

export interface EducationProps extends BiographyProps {
  body?: {
    universityName?: string;
    degree?: string;
    location?: string;
    icon?: ReactElement;
    iconDescription?: string;
  }[];
}
export const Education = (props: EducationProps) => {
  return (
    <div className="shadow rounded-lg">
      <Biography title={props.title} className="shadow-none" />
      {props.body?.map((item) => (
        <div className="text-[10px]">
          {" "}
          <div className="flex justify-between px-3 pb-3 pt-2">
            <div>
              <strong className="py-2">{item.universityName}</strong>
              <p>{item.degree}</p>
              <p> {item.location}</p>
            </div>
            <div className="flex my-auto">
              {item.icon}{" "}
              <p className="text-primary px-2">
                {" "}
                <strong>{item.iconDescription}</strong>
              </p>
            </div>
          </div>
          <hr className="mx-3"></hr>
        </div>
      ))}
    </div>
  );
};

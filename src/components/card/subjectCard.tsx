import { ReactElement } from "react";
import { Badge, BadgeProps } from "../badge/badge";
import { Button, ButtonProps } from "../button";
import { Card, CardProps } from "./card";

export interface SubjectCardProps extends CardProps {
  children?: ReactElement;
  badge?: BadgeProps;
  contentCurriculum: {
    curriculum: ReactElement;
    curriculumType: ReactElement;
  };
  contentGrade: {
    grade: ReactElement;
    gradeType: ReactElement;
  };
  contentLanguage: {
    Language: ReactElement;
    LanguageType: ReactElement;
  };
  button: ButtonProps;
}

export const SubjectCard = (props: SubjectCardProps) => {
  return (
    <Card className={props.className ?? " "}>
      <div className=" relative">
        <div className=" bg-red-400 relative ">
          <div className="text-white underline px-3 py-4">{props.children}</div>
        </div>
        <div className=" absolute top-0 right-0 ">
          {props.badge ? (
            <Badge
              {...props.badge}
              children={props.badge.children}
              className="bottom-2 relative fill-secondary w-24 pr-2"
            />
          ) : (
            " "
          )}
        </div>
        <div className="bg-red-50">
          <div className=" text-[11px]  px-3 pt-3 text-gray-600">
            {props.contentCurriculum.curriculum}
          </div>
          <div className="text-[11px] px-3 pt-2 w-1/2">
            {" "}
            {props.contentCurriculum.curriculumType}
          </div>
        </div>
        <hr></hr>
        <div className="bg-red-50">
          <div className=" text-[11px]  px-3 pt-3 text-gray-600">
            {props.contentGrade.grade}
          </div>
          <div className="text-[11px] px-3 pt-2 w-1/2">
            {" "}
            {props.contentGrade.gradeType}
          </div>
        </div>
        <hr></hr>
        <div className="bg-red-50">
          <div className=" text-[11px]  px-3 pt-3 text-gray-600">
            {props.contentLanguage.Language}
          </div>
          <div className="text-[11px] px-3 pt-2 w-1/2">
            {" "}
            {props.contentLanguage.LanguageType}
          </div>
        </div>

        <div className="bg-red-50">
          <div className=" px-2 py-2">
            <Button {...props?.button} />
          </div>
        </div>
      </div>
    </Card>
  );
};

import { ReactElement } from "react";
import { Badge, BadgeProps } from "../badge/badge";
import { Button, ButtonProps } from "../button";
import { Card, CardProps } from "./card";

export interface SubjectCardProps extends CardProps {
  children?: ReactElement;
  badge?: BadgeProps;
  list?: {
    key: number;
    title: string;
    content: string;
  }[];

  button: ButtonProps;
}

export const SubjectCard = (props: SubjectCardProps) => {
  const length = props.list?.length ?? 0;

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
              className="bottom-2 relative fill-secondary w-[85px]  pr-2"
            />
          ) : (
            " "
          )}
        </div>

        <div className="bg-red-50">
          {props.list?.map((items, index) => {
            return (
              <div>
                <div
                  key={items.key}
                  className=" text-[11px]  px-3 pt-3 text-gray-600"
                >
                  {items.title}
                </div>
                <div className="text-[11px] px-3 py-2 w-1/2">
                  {" "}
                  {items.content}
                </div>
                {index !== length - 1 && <hr className="mx-3" />}
              </div>
            );
          })}
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

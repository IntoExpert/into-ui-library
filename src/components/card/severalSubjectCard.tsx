import { UiElementProps } from "../common";
import { Card, CardProps } from "./card";

export interface SeveralSubjectCardProps extends CardProps {
  subjects?: {
    name?: string;
    curriculum?: string;
    grade?: string;
    languages?: string;
  }[];
}

export const SeveralSubjectCard = (props: SeveralSubjectCardProps) => {
  return (
    <Card className={` ${props.className ?? ""}`}>
      <h1 className=" text-xl text-primary p-5">
        <strong>{props.children}</strong>
      </h1>
      <div>
        {" "}
        <ul className="flex px-5">
          {props.subjects?.map((items) => (
            <li className=" pr-16 ">
              <a
                href={` #${items.name}`}
                className="text-gray-400   focus:text-red-400  hover:border-b-2 py-2  hover:border-b  hover:border-b hover:border-gray-400   focus:border-b-2 focus:border-b focus:border-red-400 "
              >
                {items.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="pt-20"> jfcdxfcghvjbknbhvghcfgvjbkn</div>
    </Card>
  );
};

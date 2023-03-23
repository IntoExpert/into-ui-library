import { UiElementProps } from "../../common";

export interface BiographyProps extends UiElementProps {
  title?: {
    className?: string;
    content?: string;
  };
  discription?: {
    className?: string;
    content?: string;
  };
}

export const Biography = (props: BiographyProps) => {
  return (
    <div className={`rounded-lg shadow ${props.className ?? " "}`}>
      <h1 className="text-primary py-3 px-3">
        {" "}
        <strong>{props.title?.content}</strong>
      </h1>
      <p className="px-3 pb-3 text-xs">{props.discription?.content}</p>
    </div>
  );
};

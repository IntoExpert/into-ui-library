import { Biography, BiographyProps } from "./biography";

export interface ExperienceProps extends BiographyProps {
  body?: {
    title?: string;
    companyName?: string;
    duration?: string;
    location?: string;
    discription?: string;
  }[];
}

export const Experience = (props: ExperienceProps) => {
  const length = props.body?.length ?? 0;
  return (
    <div className={`shadow rounded-lg ${props.className ?? " "}`}>
      <Biography title={props.title} className={"shadow-none"} />
      {props.body?.map((item, index) => (
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
          {index !== length - 1 && <hr className="mx-3" />}
        </div>
      ))}
    </div>
  );
};

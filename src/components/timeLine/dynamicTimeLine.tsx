export interface TimeLineWithDescriptionProps {
  timelineData?: {
    createdAt?: string;
    time?: string;
    description?: string
  }[];
}

export const TimeLineWithDescription = ({ timelineData }: TimeLineWithDescriptionProps) => {
  return (
    <div className="pt-5">
      {timelineData?.map((item, index) => (
        <div key={index}>
          <div className="flex gap-5 py-4 text-sm">
            {" "}
            <p className={`text-course`}>{item.createdAt}</p>
            <p className={`text-course`}>{item.time}</p>
            <p className=" pl-20 text-gray-500">{item.description}</p>
          </div>
          {index !== timelineData.length - 1 && (
            <div className="border-b"></div>
          )}
        </div>
      ))}
    </div>
  );
};

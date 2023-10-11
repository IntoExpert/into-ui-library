import { HTMLProps, ReactElement } from "react";

export interface ToggleProps extends HTMLProps<HTMLInputElement> {
  className?: string;
  prefixCompenent?: string | ReactElement;
}

export const Toggle = ({
  className,
  prefixCompenent,
  ...props
}: ToggleProps) => {
  return (
    <div className={`${className ?? ""}`}>
      <div className="flex items-center mb-4">
        <span className="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300 w-32">
          {`${prefixCompenent}`}
        </span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input {...props} type="checkbox" value="" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
        </label>
      </div>
    </div>
  );
};

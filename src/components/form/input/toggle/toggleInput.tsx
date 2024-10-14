import { DetailedHTMLProps, InputHTMLAttributes } from "react"

import './styles.scss'

export interface ToggleInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  labelClassname?: string;
}

export const ToggleInput = ({ className = '', labelClassname = '', ...props }: ToggleInputProps) => {

  return <label className={`relative inline-flex items-center cursor-pointer ${labelClassname} toggle-input`}>
    <input
      {...props}
      type="checkbox"
      className={`sr-only peer ${className}`}
    />
    <div className={`w-11 h-6 bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-gray-700 
            peer-checked:after:border-white after:content-[''] 
            after:absolute after:top-[2px] after:bg-white after:border-gray-300 
            after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 
            ${props.disabled ? 'peer-checked:bg-gray-300' : 'peer-checked:bg-primary'}`}></div>
  </label>
}
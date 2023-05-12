import PhoneInput2, { PhoneInputProps as PhoneInput2Props } from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'

export interface PhoneInputProps extends PhoneInput2Props {
    errormessage?: string;
}


export const PhoneInput = ({ ...props }: PhoneInputProps) => {
    return <div>
        <PhoneInput2
            excludeCountries={["il", "IL"]}
            {...props}
            containerClass={`!border-secondary h-14 ${props.containerClass ?? ''}`}
            inputClass={`!border-secondary !h-14 ${props.inputClass ?? ''}`}
            buttonClass={`!border-secondary !bg-surface h-14 !border-r-0 ${props.buttonClass ?? ''}`}
        />
        {props.errormessage && <p className="text-error text-xs italic mt-1">{props.errormessage}</p>}
    </div>
}
import PhoneInput2, { PhoneInputProps } from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'


export const PhoneInput = ({ ...props }: PhoneInputProps) => {
    return <PhoneInput2
        excludeCountries={["il", "IL"]}
        {...props}
        containerClass={`!border-secondary h-14 ${props.containerClass ?? ''}`}
        inputClass={`!border-secondary !h-14 ${props.inputClass ?? ''}`}
        buttonClass={`!border-secondary !bg-surface h-14 !border-r-0 ${props.buttonClass ?? ''}`}
    />
}
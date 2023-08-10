import PhoneInput2, { PhoneInputProps as PhoneInput2Props } from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import { UiElementSize } from '../../../common';
import { inputHeightClassDurToSize } from '../shared';

export interface PhoneInputProps extends PhoneInput2Props {
    errormessage?: string;
    size?: UiElementSize;
}

export const masks = {
    lb: ".. ... ...",
    sa: ".. ... ....",
    ae: ".. ... ....",
    bh: ".... ....",
    kw: ".... ....",
    qa: ".... ....",
    om: ".... ....",
    dz: ".. ... ....",
    km: ".. .....",
    dj: ".. .. .. ..",
    eg: "(...)... ....",
    iq: "(...)... ....",
    ly: ".. ... ...",
    mr: ".. .. ....",
    ma: ".. .... ...",
    ps: ".. ... ....",
    so: ".. ... ...",
    sd: ".. ... ....",
    sy: "... ... ...",
    tn: ".. ... ...",
    ye: "... ... ...",
    jo: ". .... ....",
};


export const PhoneInput = ({ size, ...props }: PhoneInputProps) => {
    return <div>
        <PhoneInput2
            masks={masks}
            excludeCountries={["il", "IL"]}
            {...props}
            containerClass={`!border-secondary ${inputHeightClassDurToSize(size)} w-full ${props.containerClass ?? ''}`}
            inputClass={`!border-secondary !${inputHeightClassDurToSize(size)} disabled:!bg-gray-100 ${props.inputClass ?? ''}`}
            buttonClass={`!border-secondary !bg-surface ${inputHeightClassDurToSize(size)} !border-r-0 
                ${props.disabled ? '!bg-gray-100' : ''} 
                ${props.buttonClass ?? ''}`}
        />
        {props.errormessage && <p className="text-error text-xs italic mt-1">{props.errormessage}</p>}
    </div>
}
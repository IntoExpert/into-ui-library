import PhoneInput2, { PhoneInputProps as PhoneInput2Props } from 'react-phone-input-2';
import './styles.scss'
import { UiElementSize } from '../../../common';
import { inputHeightClassDurToSize } from '../shared';
import { InputLabel } from '../label';
import { ReactElement } from 'react';

export interface PhoneInputProps extends PhoneInput2Props {
    errormessage?: string;
    size?: UiElementSize;
    label?: ReactElement | string;
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
        <InputLabel content={props.label} className="block mb-2" />
        <PhoneInput2
            masks={masks}
            excludeCountries={["il", "IL"]}
            {...props}
            containerClass={`${props.errormessage ? '!border-error' : '!border-secondary'} 
                ${inputHeightClassDurToSize(size)} w-full ${props.containerClass ?? ''}`}
            inputClass={`${props.errormessage ? '!border-error' : '!border-secondary'} 
                !${inputHeightClassDurToSize(size)} disabled:!bg-gray-100 ${props.inputClass ?? ''}`}
            buttonClass={`${props.errormessage ? '!border-error' : '!border-secondary'} !bg-surface 
                ${inputHeightClassDurToSize(size)} !border-r-0 
                ${props.disabled ? '!bg-gray-100' : ''} 
                ${props.buttonClass ?? ''}`}
        />
        {props.errormessage && <p className="text-error text-xs italic mt-1">{props.errormessage}</p>}
    </div>
}
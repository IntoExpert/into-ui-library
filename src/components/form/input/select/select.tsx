import ReactSelect from 'react-select';
import { UiElementProps } from '../../../common';
import { StateManagerProps } from 'react-select/dist/declarations/src/useStateManager';
import { InputLabel } from '../label';
import { SelectOption } from './option';

export interface SelectProps extends UiElementProps, StateManagerProps<SelectOption> {
    errormessage?: string;
    /**
     * Select label, if you leave it empty no label will show
     */
    label?: string;
};

export const Select = (props: SelectProps) => {

    return (
        <div className={`${props.className}`}>
            <InputLabel inputId={props.id} content={props.label} className="block mb-2" />
            <ReactSelect
                classNames={{
                    container: (state) =>
                        `w-full`
                    ,
                    control: (state) =>
                        `!rounded h-14 ${state.isFocused ? 'border-primary' : '!border-secondary'}`,
                    indicatorSeparator: (state) => `!bg-transparent`,
                    dropdownIndicator: (state) => `!text-black`,
                    placeholder: (state) => `!placeholder:text-gray-500 !text-gray-500`,
                }}
                {...props}
            />
            {props.errormessage && <p className="text-red-600 text-xs italic mt-1">{props.errormessage}</p>}
        </div>
    )
}
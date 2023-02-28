import ReactSelect from 'react-select';
import { UiElementProps } from '../../../common';
import { StateManagerProps } from 'react-select/dist/declarations/src/useStateManager';
import { InputLabel } from '../label';

export interface SelectProps extends UiElementProps, StateManagerProps {
    errorMessage?: string;
    /**
     * Select label, if you leave it empty no label will show
     */
    label?: string;
};

export const Select = (props: SelectProps) => {

    return (
        <div className={`${props.className}`}>
            <InputLabel inputId={props.id} name={props.label} className="block mb-2" />
            <ReactSelect
                classNames={{
                    container: (state) =>
                        `w-full`
                    ,
                    control: (state) =>
                        `!rounded h-14 ${state.isFocused ? 'border-primary' : '!border-secondary'}`,
                    indicatorSeparator: (state) => `!bg-transparent`,
                    dropdownIndicator: (state) => `!text-black`,
                    placeholder: (state) => `!placeholder:text-gray-500`,
                }}
                {...props}
            />
            {props.errorMessage && <p className="text-red-600 text-xs italic mt-1">{props.errorMessage}</p>}
        </div>
    )
}
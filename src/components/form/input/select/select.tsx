import ReactSelect, { components } from 'react-select';
import { UiElementProps } from '../../../common';
import { StateManagerProps } from 'react-select/dist/declarations/src/useStateManager';
import { InputLabel } from '../label';
import { SearchIcon } from '../../../icons';
import { DropdownIndicatorProps } from 'react-select/dist/declarations/src/components/indicators';
import { size } from 'lodash';

export interface SelectProps extends UiElementProps, StateManagerProps {
    errormessage?: string;
    /**
     * Select label, if you leave it empty no label will show
     */
    label?: string;
    /**
     * 
     */
    size?: 'sm' | 'md'
};

export const Select = (props: SelectProps) => {

    const DropdownIcon = (props: DropdownIndicatorProps) => {
        return (
            <components.DropdownIndicator {...props}>
                <SearchIcon className={`fill-secondary`} />
            </components.DropdownIndicator>
        );
    }

    return (
        <div className={`${props.className}`}>
            <InputLabel inputId={props.id} content={props.label} className="block mb-2" />
            <ReactSelect
                classNames={{
                    container: (state) =>
                        `w-full`
                    ,
                    control: (state) =>
                        `!rounded ${props.size === 'sm' ? 'h-10' : 'h-14'} 
                        ${state.isFocused ? 'border-primary' : '!border-secondary'}`,
                    indicatorSeparator: (state) => `!bg-transparent`,
                    dropdownIndicator: (state) => `!text-black`,
                    placeholder: (state) => `!placeholder:text-gray-500 ${props.size === "sm" ? 'text-sm font-light !text-gray-700' : '!text-gray-500'}`,
                }}
                components={{
                    DropdownIndicator: props.isSearchable ? DropdownIcon : undefined,
                }}
                {...props}
            />
            {props.errormessage && <p className="text-red-600 text-xs italic mt-1">{props.errormessage}</p>}
        </div>
    )
}
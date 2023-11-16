import ReactSelect, { components } from 'react-select';
import { UiElementProps } from '../../../common';
import { StateManagerProps } from 'react-select/dist/declarations/src/useStateManager';
import { InputLabel } from '../label';
import { DropdownArrowIcon, SearchIcon } from '../../../icons';
import { DropdownIndicatorProps } from 'react-select/dist/declarations/src/components/indicators';
import { ReactElement, useCallback } from 'react';

export interface SelectProps<Option = unknown> extends UiElementProps, StateManagerProps<Option> {
    errormessage?: string;
    /**
     * Select label, if you leave it empty no label will show
     */
    label?: string | ReactElement;
    /**
     * 
     */
    size?: 'sm' | 'md'
};

export const Select = <Option = unknown>(props: SelectProps<Option>) => {

    const DropdownSearchIcon = (props: DropdownIndicatorProps<Option>) => {
        return (
            <components.DropdownIndicator {...props}>
                <SearchIcon className={`fill-secondary`} />
            </components.DropdownIndicator>
        );
    }

    const DropdownIcon = (props: DropdownIndicatorProps<Option>) => {
        return (
            <components.DropdownIndicator {...props}>
                <DropdownArrowIcon className={`fill-secondary`} />
            </components.DropdownIndicator>
        );
    }

    const MultiSelectOption = useCallback((props: any) => {
        return (
            <div>
                <components.Option {...props}>
                    <label>
                        <input
                            title="is selected"
                            type="checkbox"
                            checked={props.isSelected}
                            onChange={() => null}
                        />{" "}
                        {props.label}</label>
                </components.Option>
            </div>
        );
    }, []);

    return (
        <div className={`${props.className}`}>
            <InputLabel inputId={props.id} content={props.label} className="block mb-2" />
            <ReactSelect<Option, boolean>
                hideSelectedOptions={!props.isMulti}
                closeMenuOnSelect={!props.isMulti}
                components={{
                    DropdownIndicator: props.isSearchable ? DropdownSearchIcon : DropdownIcon,
                    Option: props.isMulti ? MultiSelectOption : components.Option
                }}
                {...props}
                classNames={{
                    container: () =>
                        `w-full`
                    ,
                    control: (state) =>
                        `!rounded ${props.size === 'sm' ? 'h-10' : 'h-14'} 
                        ${props.errormessage ? '!border-error' : state.isFocused ? 'border-primary' : '!border-secondary'}`,
                    indicatorSeparator: () => `!bg-transparent`,
                    dropdownIndicator: () => `!text-black`,
                    valueContainer: () => `!overflow-auto max-h-full`,
                    placeholder: () => `placeholder:text-gray-500 placeholder:font-light ${props.size === 'sm' ? 'text-xs' : ''}`,
                    option: (props) => `${props.isSelected ? `!bg-gray-50 !text-black` : ``}`,
                    ...props.classNames
                }}
            />
            {props.errormessage && <p className="text-error text-xs italic mt-1">{props.errormessage}</p>}
        </div>
    )
}
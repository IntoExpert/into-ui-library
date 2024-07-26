import ReactSelect, { AsyncProps } from 'react-select/async';
import { components, DropdownIndicatorProps, GroupBase } from 'react-select';
import { UiElementProps } from '../../../common';
import { InputLabel } from '../label';
import { ReactElement, useCallback } from 'react';
import { SearchIcon } from '../../../icons';

export interface AsyncSelectProps<Option = unknown, IsMulti extends boolean = boolean, GROUP extends GroupBase<Option> = any> extends UiElementProps, AsyncProps<Option, IsMulti, GROUP> {
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

export const AsyncSelect = <Option = unknown, IsMulti extends boolean = false>(props: AsyncSelectProps<Option, IsMulti, any>) => {

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

    const DropdownSearchIcon = (props: DropdownIndicatorProps<Option>) => {
        return (
            <components.DropdownIndicator {...props}>
                <SearchIcon className={`fill-secondary`} />
            </components.DropdownIndicator>
        );
    }


    return (
        <div className={`${props.className}`}>
            <InputLabel inputId={props.id} content={props.label} className="block mb-2" />
            <ReactSelect<Option, IsMulti>
                hideSelectedOptions={!props.isMulti}
                closeMenuOnSelect={!props.isMulti}
                {...props}
                components={{
                    DropdownIndicator: DropdownSearchIcon,
                    Option: props.isMulti ? MultiSelectOption : components.Option
                }}
                classNames={{
                    container: () => `w-full`,
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
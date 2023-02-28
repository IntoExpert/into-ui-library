import ReactSelect from 'react-select';
import { UiElementProps } from '../../../common';
import { StateManagerProps } from 'react-select/dist/declarations/src/useStateManager';

export interface SelectProps extends UiElementProps, StateManagerProps {

};

export const Select = (props: SelectProps) => {

    return (
        <div className={`w-96 ${props.className}`}>
            <ReactSelect
                classNames={{
                    container: (state) =>
                        `w-full`

                    ,
                    control: (state) =>
                        `!rounded ${state.isFocused ? 'border-primary' : '!border-secondary'}`,
                    indicatorSeparator: (state) => `!bg-transparent`,
                    dropdownIndicator: (state) => `!text-black`,

                }}
                {...props}
            />
        </div>
    )
}
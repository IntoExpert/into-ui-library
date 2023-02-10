
import { ChangeEvent, useEffect, useState } from "react";

export interface InputFieldProps {
    /**
     * The id of the input element
     */
    id?: string;
    /**
     * Input label, if you leave it empty no label will show
     */
    label?: string;
    /**
     * Input placeholder
     */
    placeholder?: string;
    /**
     * Input current value, it will be sync to the input element
     */
    value?: string;
    /**
     * Input initial value
     */
    defaultValue?: string;
    /**
     * Input error message, when it is null or undefined, no error considered
     */
    errorMessage?: string;
    /**
     * On input value change callback
     */
    onChange?: (value: string) => void;
}

interface InputStateProps {
    value?: string;
}

/**
 * A controlled input element, with too much features
 * 
 * @param props 
 * @returns Controlled input element
 */
export const InputField = (props: InputFieldProps) => {

    const [inputState, setInputState] = useState<InputStateProps>({ value: props.defaultValue });

    const handleInputValueChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputState(state => ({ ...state, value }));
        props.onChange?.(value);
    };

    useEffect(() => {
        setInputState(state => ({ ...state, value: props.value }));
    }, [props.value])

    return (
        <div className="text-start">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={props.id}>
                {props.label}
            </label>
            <input className={`shadow appearance-none border 
                 rounded-lg py-2 px-3 text-grey-700 leading-tight 
                 focus:outline-none focus:shadow-outline
                 ${props.errorMessage ? 'border-red-600' : 'border-secondary'}`}
                id={props.id}
                type="text"
                value={inputState.value}
                onChange={handleInputValueChange}
                placeholder={props.label} />

            {props.errorMessage && <p className="text-red-600 text-xs italic mt-1">{props.errorMessage}</p>}
        </div>
    );
}
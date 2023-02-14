
import { ChangeEvent, FocusEvent, HTMLInputTypeAttribute, Ref, forwardRef, useEffect, useState } from "react";

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
     * Field type
     */
    type?: HTMLInputTypeAttribute | undefined
    /**
     * Field input name, it is better to set a name for your input field
     */
    name?: string;
    /**
     * Field ref, reference to the input Field
     */
    ref?: Ref<any>
    /**
     * Css class name for the field
     */
    className?: string;

    // Events
    /**
     * On input value change callback
     */
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    /**
     * On input blur event handler
     */
    onBlur?: (event: FocusEvent<HTMLInputElement, Element>) => void;
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
export const InputField = forwardRef<HTMLInputElement, InputFieldProps>((props, ref) => {

    const [inputState, setInputState] = useState<InputStateProps>({ value: props.defaultValue });

    const handleInputValueChange = (event: ChangeEvent<HTMLInputElement>) => {
        props.onChange?.(event);
    };

    const handleOnBlur = (event: FocusEvent<HTMLInputElement, Element>) => {
        props.onBlur?.(event);
    }

    useEffect(() => {
        setInputState(state => ({ ...state, value: props.value }));
    }, [props.value]);

    return (
        <div className="text-start">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={props.id}>
                {props.label}
            </label>
            <input className={`shadow appearance-none border 
                 rounded-lg py-2 px-3 text-grey-700 leading-tight 
                 focus:outline-none focus:shadow-outline 
                 ${props.errorMessage ? 'border-red-600' : 'border-secondary'}
                 ${props.className ?? ''}`}
                id={props.id}
                name={props.name}
                placeholder={props.placeholder}
                type={props.type ?? 'text'}
                value={inputState.value}
                onChange={handleInputValueChange}
                onBlur={handleOnBlur}
                ref={ref}
            />

            {props.errorMessage && <p className="text-red-600 text-xs italic mt-1">{props.errorMessage}</p>}
        </div>
    );
})
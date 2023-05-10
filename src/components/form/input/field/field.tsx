
import { ChangeEvent, ClipboardEvent, FocusEvent, HTMLInputTypeAttribute, ReactElement, Ref, forwardRef, useEffect, useState } from "react";
import { InputLabel } from "../label/label";
import { UiElementProps } from "../../../common";

export interface InputFieldProps extends UiElementProps {
    /**
     * The id of the input element
     */
    id?: string;
    /**
     * Input label, if you leave it empty no label will show
     */
    label?: ReactElement | string;
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
    errormessage?: string;
    /**
     * Field type
     */
    type?: HTMLInputTypeAttribute | undefined
    /**
     * Field input name, it is better to set a name for your input field
     */
    name?: string;
    /**
     * Check if input is disabled
     */
    disabled?: boolean;
    /**
     * Field ref, reference to the input Field
     */
    ref?: Ref<any>
    /**
     * Css class name for the input element
     */
    className?: string;
    /**
     * Css classses for input label container
     */
    containerClassName?: string;

    // Events
    /**
     * On input value change callback
     */
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    /**
     * On input blur event handler
     */
    onBlur?: (event: FocusEvent<HTMLInputElement, Element>) => void;
    onPast?: (event: ClipboardEvent) => void;
    /**
     * Featured placeholder, show JSX elements as placeholder
     */
    autoFocus?: boolean;
    featuredPlaceholder?: ReactElement | string;
    min?: number | string;
    max?: number | string;
    postfix?: ReactElement
}

interface InputFieldState {
    value?: string;
}

/**
 * A controlled input element, with too much features
 * 
 * @param props 
 * @returns Controlled input element
 */
export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(({ value, onPast, ...props }, ref) => {

    const [state, setState] = useState<InputFieldState>({ value: value ?? props.defaultValue });

    useEffect(() => {
        setState(prevState => ({ ...prevState, value: value }));
    }, [value])

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setState(prevState => ({ prevState, value }));
        props.onChange?.(event);
    }


    switch (props.type) {
        case "radio":
        case "checkbox":
            const isRadio = props.type === 'radio';
            const radioClasses = `appearance-none rounded-full border border-gray-300 bg-white checked:bg-white 
            checked:border-secondary checked:border-4 focus:outline-secondary transition duration-300 
            cursor-pointer focus:ring-2 focus:ring-secondary focus:shadow-none`;
            const checkBoxClasses = `rounded border border-gray-400 checked:bg-red-400 checked:after:content-['✓'] 
            checked:border-red-400 after:text-surface after:absolute after:0 after:w-full after:flex after:justify-center 
            after:items-center after:text-xs appearance-none focus:outline-secondary after:pointer-events-none`;

            return (
                <div className={`flex justify-start align-baseline ${props.containerClassName}`}>
                    <input
                        {...props}
                        className={`relative h-4 w-4 ${isRadio ? radioClasses : checkBoxClasses}
                         ${props.className ?? ''}`}
                        checked={state.value && (state.value === props.name || state.value === '1') ? true : false}
                        value={props.name}
                        onClick={e => {
                            const newValue = state.value ? '' : e.currentTarget.value;
                            setState(prevState => ({ ...prevState, value: newValue }));
                        }}
                        ref={ref} />
                    <InputLabel inputId={props.id} content={props.label} className="mx-2 inline-block" />
                </div>
            );
        default:
            return <div className={`text-start ${props.containerClassName}`}>
                <InputLabel inputId={props.id} content={props.label} className="block mb-2" />
                <div className={`relative`}>
                    <input
                        {...props}
                        className={`shadow appearance-none border w-full
                            rounded h-14 px-3 text-gray-700 leading-tight 
                            focus:outline-none focus:shadow-outline
                        placeholder:text-gray-500 disabled:!bg-gray-100
                            ${props.errormessage ? 'border-error' : 'border-secondary'}
                            ${props.className ?? ''}
                            ${props.postfix ? props.dir === 'rtl' ? 'pl-12' : 'pr-12' : ''}`}
                        onChange={handleOnChange}
                        onPaste={onPast}
                        value={state.value}
                        ref={ref}
                    />
                    {props.postfix ? <div className={`absolute top-1/2 -translate-y-1/2 right-4`}>
                        {props.postfix}
                    </div> : null}
                    {/* Featured placeholder */}
                    {
                        props.featuredPlaceholder && !state.value
                            ? <div className={`absolute pointer-events-none top-1/2 -translate-y-1/2 left-3 text-gray-500`}>
                                {props.featuredPlaceholder}
                            </div>
                            : null
                    }
                </div>

                {props.errormessage && <p className="text-error text-xs italic mt-1">{props.errormessage}</p>}
            </div>;
    };
})
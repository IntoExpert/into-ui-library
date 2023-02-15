
import { type } from "os";
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

    const Label = ({ className }: { className?: string }) =>
        <label className={`text-gray-700 text-sm font-bold ${className ?? ''}`} htmlFor={props.id}>
            {props.label}
        </label>;
    const RadioOrCheckBox = () => {

        const isRadio = props.type === 'radio';
        const radioClasses = `appearance-none rounded-full border border-gray-300 bg-white checked:bg-white 
        checked:border-secondary checked:border-4 focus:outline-secondary transition duration-300 
        cursor-pointer focus:ring-2 focus:ring-secondary focus:shadow-none`;
        const checkBoxClasses = `rounded accent-secondary focus:outline-secondary`;

        return (
            <div className={`flex justify-start align-baseline ${props.containerClassName}`}>
                <input
                    {...props}
                    className={`h-4 w-4 ${isRadio ? radioClasses : checkBoxClasses}
                     ${props.className ?? ''}`}
                    value={props.name}
                    ref={ref} />
                <Label className="mx-2 inline-block" />
            </div>
        );
    }

    const DefaultInput = () => <div className={`text-start ${props.containerClassName}`}>
        <Label className="block" />
        <input
            {...props}
            className={`shadow appearance-none border
         rounded-lg py-2 px-3 text-grey-700 leading-tight 
         focus:outline-none focus:shadow-outline 
         ${props.errorMessage ? 'border-red-600' : 'border-secondary'}
         ${props.className ?? ''}`}
            ref={ref}
        />

        {props.errorMessage && <p className="text-red-600 text-xs italic mt-1">{props.errorMessage}</p>}
    </div>;

    const InputReducer = () => {
        switch (props.type) {
            case "radio":
            case "checkbox":
                return <RadioOrCheckBox />;
            default:
                return <DefaultInput />;
        }
    }

    return (
        <InputReducer />
    );
})
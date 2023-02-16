import { ReactElement, ReactNode } from "react";
import { Button, ButtonProps } from "../button/button";
import { InputField, InputFieldProps } from "./input/field/field";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

/**
 * Dynamic form field props
 */
export interface FormFieldProps extends InputFieldProps {
    /**
     * Validation logic
     */
    validation?: {
        /**
         * True if the field is required
         */
        required?: boolean;
        /**
         * Custom validation function
         * 
         * @param value 
         * @returns false if the field is not valid
         */
        validate?: (value: any) => boolean;
        messages?: { [key: string]: string };
    };
    /**
     * HTML input element type
     * 
     */
    elementType?: "input" | "select" | "textarea";
};

export interface FormProps {
    /**
     * Form id
     */
    id?: string;
    /**
     * On form submit event
     * 
     * @param values 
     * @returns form values
     */
    onSubmit: SubmitHandler<any>;
    /**
     * Input fields structure, to build your dynamic form
     */
    fields?: FormFieldProps[] | undefined;
    /**
     * Css classes for the form container
     */
    cssClasses?: string;
    /**
     * Submit button
     */
    submitButton?: ButtonProps | ReactElement<ButtonProps> | undefined;
};

export const DynamicForm = function (props: FormProps) {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<any>({
        reValidateMode: "onBlur",
        mode: "onBlur"
    });

    const defaultValidationMessage = `Invalid field`;

    const getValidationMessage = (field: FormFieldProps, type: any) => {
        if (!type) return undefined;

        return field.validation?.messages ? (field.validation.messages[type] ?? defaultValidationMessage) : defaultValidationMessage;
    }

    const Input = (field: FormFieldProps) => {
        const inputProps = {
            ...field,
            ...register(field.name ?? '',
                { ...field.validation })
        }
        return (
            <InputField
                {...inputProps}
                errorMessage={getValidationMessage(field, errors[field.name ?? '']?.type)} />
        );
    }

    return (
        <form id={props.id} className={`gap-3 ${props.cssClasses ?? ''}`} onSubmit={handleSubmit(props.onSubmit)}>
            {props.fields?.map((field: FormFieldProps, index: number) => {
                return <Input key={index} {...field} />;
            })}
            <div className="flex justify-end">
                {props.submitButton && <Button type="submit">
                    Submit
                </Button>}
            </div>
        </form>
    );
};
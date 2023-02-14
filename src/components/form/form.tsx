import { FormEvent, useMemo, useState } from "react";
import { InputField, InputFieldProps } from "./input/field/field";
import { FieldValues, useForm } from "react-hook-form";

export interface FormFieldProps extends InputFieldProps {
    validation: {
        required?: boolean;
        validate?: (value: any) => boolean;
    };
    elementType?: "input" | "select" | "textarea";
};

export interface FormProps<TFieldValues> {
    id?: string;
    defaultValues?: any;
    onSubmit: (values: TFieldValues) => void;
    fields?: FormFieldProps[] | undefined;
};

export const DynamicForm = function <TFieldValues>(props: FormProps<TFieldValues>) {

    const {
        setValue,
        getValues,
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: props.defaultValues,
        reValidateMode: "onBlur",
        mode: "onBlur"
    });

    const Input = (field: FormFieldProps) => {
        const inputProps = {
            ...field,
            ...register(field.name ?? '',
                { ...field.validation })
        }
        return (
            <InputField
                {...inputProps}
                errorMessage={errors[field.name ?? ''] ? 'Error' : ''} />
        );
    }

    return (
        <form className="row space-y-3" onSubmit={handleSubmit(props.onSubmit)}>
            {props.fields?.map((field: FormFieldProps, index: number) => {
                return <Input key={field.name} {...field} />;
            })}


        </form>
    );
};
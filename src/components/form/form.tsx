import { InputField, InputFieldProps } from "./input/field/field";
import { useForm } from "react-hook-form";

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
    };
    /**
     * HTML input element type
     * 
     */
    elementType?: "input" | "select" | "textarea";
};

export interface FormProps<TFieldValues> {
    /**
     * Form id
     */
    id?: string;
    /**
     * Inputs default values
     */
    defaultValues?: any;
    /**
     * On form submit event
     * 
     * @param values 
     * @returns form values
     */
    onSubmit: (values: TFieldValues) => void;
    /**
     * Input fields structure, to build your dynamic form
     */
    fields?: FormFieldProps[] | undefined;
};

export const DynamicForm = function <TFieldValues>(props: FormProps<TFieldValues>) {

    const {
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
        <form id={props.id} className="row space-y-3" onSubmit={handleSubmit(props.onSubmit)}>
            {props.fields?.map((field: FormFieldProps, index: number) => {
                return <Input key={index} {...field} />;
            })}
        </form>
    );
};
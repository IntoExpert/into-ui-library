/**
 * Input field properties
 * 
 * @interface InputFieldProps
 * @member id - The id of the input element
 * @member label - Input label, if you leave it empty no label will show
 * @member placeholder - Input placeholder
 * @member value - Input current value, it will be sync to the input element
 * @member defaultValue - Input initial value
 * @member onChange - On input value change callback
 * @member errorMessage - Input error message, when it is null or undefined, no error considered
 */

export interface InputFieldProps {
    id?: string;
    label?: string;
    placeholder?: string;
    value?: string;
    defaultValue?: string;
    errorMessage?: string;
    onChange?: (value: string) => void;
}

/**
 * 
 * @param props 
 * @returns Controlled input element
 */
export const InputField = (props: InputFieldProps) => {
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
                placeholder={props.label} />

            {props.errorMessage && <p className="text-red-500 text-xs italic mt-1">{props.errorMessage}</p>}
        </div>
    );
}
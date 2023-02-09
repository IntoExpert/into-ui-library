export interface InputFieldProps {
    id?: string;
    label?: string;
    placeholder?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
}

export const InputField = (props: InputFieldProps) => {
    return (
        <div className="text-start">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={props.id}>
                {props.label}
            </label>
            <input className={`shadow appearance-none border 
                border-secondary rounded-lg py-2 px-3 text-grey-700 leading-tight 
                 focus:outline-none focus:shadow-outline`}
                id={props.id}
                type="text"
                placeholder={props.label} />
        </div>
    );
}
import { forwardRef, useCallback, useEffect, useState } from "react";
import { InputField, InputFieldProps } from "../field/field";
import { EyeIcon } from "../../../icons";

export interface PasswordFieldProps extends InputFieldProps {
    onShowPasswordToggle?: (value: boolean) => void;
};

export const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(({ onShowPasswordToggle, ...props }: PasswordFieldProps, ref) => {

    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        onShowPasswordToggle?.(showPassword)
    }, [showPassword, onShowPasswordToggle]);

    const ShowPasswordIcon = useCallback(() => {
        return <div className={`cursor-pointer`} onClick={() => setShowPassword(prev => !prev)}>
            <EyeIcon className={`fill-gray-400`} />
            <div className={`absolute top-1/3 rounded-2xl w-full h-1 bg-gray-300 rotate-45 transition-all
            ${showPassword ? `` : 'max-w-0'}`}></div>
        </div>
    }, [showPassword]);

    return <InputField {...props} ref={ref} type={showPassword ? 'text' : 'password'} postfix={<ShowPasswordIcon />} />
});
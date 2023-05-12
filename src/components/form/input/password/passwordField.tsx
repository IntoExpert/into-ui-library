import { forwardRef, useCallback, useEffect, useState } from "react";
import { InputField, InputFieldProps } from "../field/field";
import { EyeIcon } from "../../../icons";

export interface PasswordFieldProps extends InputFieldProps {
    onShowPasswordToggle?: (value: boolean) => void;
    show?: boolean;
};

export const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(({ show, onShowPasswordToggle, ...props }: PasswordFieldProps, ref) => {

    const [showPassword, setShowPassword] = useState(show);

    useEffect(() => {
        onShowPasswordToggle?.(!showPassword)
    }, [showPassword, onShowPasswordToggle]);

    useEffect(() => setShowPassword(show), [setShowPassword, show]);

    const ShowPasswordIcon = useCallback(() => {
        return <div className={`cursor-pointer`} onClick={() => setShowPassword(prev => !prev)}>
            <EyeIcon className={`fill-gray-400`} />
            <div className={`absolute top-1/3 rounded-2xl w-full h-1 bg-gray-300 rotate-45 transition-all
            ${showPassword ? `` : 'max-w-0'}`}></div>
        </div>
    }, [showPassword]);

    return <InputField {...props} ref={ref} type={showPassword ? 'text' : 'password'} inputPostfix={<ShowPasswordIcon />} />
});
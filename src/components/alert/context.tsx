import { createContext, useContext, useState } from "react";
import { UiElementProps } from "../common/uiElement";
import { BelowNavBarAlert } from "./belowNavBar/belowNavBarAlert";

export interface AlertOptions extends UiElementProps {
    message: string | JSX.Element;
};

export interface AlertContextProps {
    fireAlert: (options: AlertOptions) => void;
    fireSuccessAlert: (options: AlertOptions) => void;
    fireErrorAlert: (options: AlertOptions) => void;
};



const AlertContext = createContext<AlertContextProps>({
    fireAlert: (options) => { },
    fireSuccessAlert: (options) => { },
    fireErrorAlert(options) {
    },
});

export interface AlertProviderProps {
    rootElementId?: string;
    children?: JSX.Element;
}

export const AlertProvider = ({ rootElementId, children }: AlertProviderProps) => {

    const [state, setState] = useState<AlertOptions>({ message: "", className: ' ' });

    const fireAlert = (options: AlertOptions) => {
        const alertDefaultOptions: AlertOptions = {
            message: "Alert",
            className: "bg-gray-50 text-gray-800",
        };

        setState({ ...alertDefaultOptions, ...options })
    }

    const fireSuccessAlert = (options: AlertOptions) => {
        const successAlertDefaultOptions: AlertOptions = {
            message: "Success",
            className: "bg-green-500 text-white",
        };

        setState({ ...successAlertDefaultOptions, ...options });
    }

    const fireErrorAlert = (options: AlertOptions) => {
        const errorAlertDefaultOptions: AlertOptions = {
            message: "Error",
            className: "bg-red-500 text-white",
        };

        setState({ ...errorAlertDefaultOptions, ...options });
    }

    const onClose = () => {
        setState({ message: "", className: '' });
    }

    return (
        <AlertContext.Provider value={{ fireAlert, fireSuccessAlert, fireErrorAlert }}>
            <BelowNavBarAlert {...state} onClose={onClose} />
            {children}
        </AlertContext.Provider>
    );
};

export const useAlert = () => useContext(AlertContext);
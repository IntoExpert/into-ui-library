import { createContext, useContext, useState } from "react";
import { UiElementProps } from "../common/uiElement";
import { OnTopOfElementNavbar as SnackBarAlert } from "./snackBar/snackBar";

export interface AlertOptions extends UiElementProps {
    /**
     * Alert message
     */
    message: string | JSX.Element;
};

export interface AlertContextProps {
    /**
     * Fire default alert without any predefined props
     */
    fireAlert: (options: AlertOptions) => void;
    /**
     * Fire success alert with predefined colors
     */
    fireSuccessAlert: (options: AlertOptions) => void;
    /**
     * Fire error alert with predefined colors
     */
    fireErrorAlert: (options: AlertOptions) => void;
};


/**
 * Alert context, that provide ability to fire an alert in any react component 
 */
const AlertContext = createContext<AlertContextProps>({
    fireAlert: (options) => { },
    fireSuccessAlert: (options) => { },
    fireErrorAlert(options) {
    },
});

export interface AlertProviderProps {
    rootElementId?: string;
    children?: JSX.Element;
    classname?: string;
}

/**
 * Inject alert in the app and manage its state
 */
export const AlertProvider = ({ rootElementId, children, classname }: AlertProviderProps) => {

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
            className: "bg-red-400 text-white text-sm",
        };

        setState({ ...errorAlertDefaultOptions, ...options });
    }

    const onClose = () => {
        setState({ message: "", className: '' });
    }

    return (
        <AlertContext.Provider value={{ fireAlert, fireSuccessAlert, fireErrorAlert }}>
            <SnackBarAlert {...state}
                className={`${classname ?? ''} ${state.className ?? ''}`}
                elementId={rootElementId}
                onClose={onClose} />
            {children}
        </AlertContext.Provider>
    );
};

export const useAlert = () => useContext(AlertContext);
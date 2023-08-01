import { createContext, useCallback, useContext, useState } from "react";
import { UiElementProps } from "../common/uiElement";
import { OnTopOfElementNavbar as SnackBarAlert } from "./snackBar/snackBar";
import { DialogAlert, DialogAlertOptions } from "./dialog/dialog";

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
    /**
     * Show alert dialog
     * @param options 
     * @returns 
     */
    fireAlertDialog: (options: AlertOptions) => void;
    fireConfirmAlert: ({ message, cancelTitle, confirmTitle, onConfirm }: {
        message: string;
        confirmTitle: string;
        cancelTitle: string;
        onConfirm: () => void;
    }) => void;
};

export interface AlertContextState {
    snackBarAlert: AlertOptions;
    dialogAlert: DialogAlertOptions;
}

/**
 * Alert context, that provide ability to fire an alert in any react component 
 */
const AlertContext = createContext<AlertContextProps>({
    fireAlert: () => { },
    fireSuccessAlert: () => { },
    fireErrorAlert() {
    },
    fireAlertDialog() { },
    fireConfirmAlert: () => { }
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

    const [state, setState] = useState<AlertContextState>({
        snackBarAlert: { message: "", className: ' ' },
        dialogAlert: {}
    });

    const fireAlert = (options: AlertOptions) => {
        const alertDefaultOptions: AlertOptions = {
            message: "Alert",
            className: "bg-gray-50 text-gray-800",
        };

        setState(prevState => ({ ...prevState, snackBarAlert: { ...alertDefaultOptions, ...options } }))
    }

    const fireSuccessAlert = (options: AlertOptions) => {
        const successAlertDefaultOptions: AlertOptions = {
            message: "Success",
            className: "bg-green-500 text-white",
        };

        setState(prevState => ({ ...prevState, snackBarAlert: { ...successAlertDefaultOptions, ...options } }))
    }

    const fireErrorAlert = (options: AlertOptions) => {
        const errorAlertDefaultOptions: AlertOptions = {
            message: "Error",
            className: "bg-red-400 text-white text-sm",
        };

        setState(prevState => ({ ...prevState, snackBarAlert: { ...errorAlertDefaultOptions, ...options } }))
    }

    const onSnackBarClose = useCallback(() => {
        setState(prevState => ({ ...prevState, snackBarAlert: { message: "", className: '' } }));
    }, []);

    const onAlertDialogClose = useCallback(() => {
        setState(prevState => ({ ...prevState, dialogAlert: { show: false } }));
    }, []);

    const fireAlertDialog = useCallback((options: DialogAlertOptions) =>
        setState(prevState => ({ ...prevState, dialogAlert: { ...options, show: true } })), []);

    const fireConfirmAlert = useCallback(({ message, cancelTitle, confirmTitle, onConfirm }: {
        message: string;
        confirmTitle: string;
        cancelTitle: string;
        onConfirm: () => void;
    }) => {
        const body = <div className={`text-md font-bold`} dangerouslySetInnerHTML={{ __html: message }}>
        </div>;

        fireAlertDialog({
            body, cancelButton: {
                children: <span>{cancelTitle}</span>,
                className: `border !text-gray-700 !border-gray-700 bg-transparent hover:!bg-gray-700 hover:!text-surface`
            },
            confirmButton: {
                children: <span>{confirmTitle}</span>,
                className: `border !text-red-500 !border-red-500 bg-transparent hover:!bg-red-500 hover:!text-surface`,
                onClick: onConfirm
            }
        })
    }, [fireAlertDialog]);

    return (
        <AlertContext.Provider value={{ fireAlert, fireSuccessAlert, fireErrorAlert, fireAlertDialog, fireConfirmAlert }}>
            <SnackBarAlert {...state.snackBarAlert}
                className={`${classname ?? ''} ${state.snackBarAlert.className ?? ''}`}
                elementId={rootElementId}
                onClose={onSnackBarClose} />
            <DialogAlert {...state.dialogAlert} onClose={onAlertDialogClose} />
            {children}
        </AlertContext.Provider>
    );
};

export const useAlert = () => useContext(AlertContext);
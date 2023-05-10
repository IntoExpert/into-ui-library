import { ClipboardEvent, useCallback, useMemo, useState } from "react";
import { InputField } from "../field";
import { InputFieldProps } from "../field/field";

export interface VerificationCodeInputProps extends InputFieldProps {
    codeLength?: number;
};

interface VerificationCodeInputState {
    value: (number | undefined)[];
    focusIndex: number;
}

export const VerificationCodeInput =
    ({ codeLength = 6, value = '', className }: VerificationCodeInputProps) => {

        const stringArrayToValue = useCallback((stringValue: string) => {
            const array: (number | undefined)[] = Array(codeLength).fill(undefined);

            return array.map((currValue, index) => {
                if (index < stringValue.length) {
                    let indexValue: number | undefined = Number(stringValue[index]);
                    if (isNaN(indexValue) || indexValue < 0) indexValue = undefined;

                    return indexValue;
                }

                return currValue;
            })
        }, [codeLength])

        const valuesArray = useMemo(() => {
            return stringArrayToValue(value);
        }, [stringArrayToValue, value]);

        const [state, setState] = useState<VerificationCodeInputState>({ value: valuesArray, focusIndex: 0 });

        const handleAutoFocus = useCallback((focusIndex: number) => {
            if (focusIndex < 0 || focusIndex === codeLength) return

            setState(prevState => ({ ...prevState, focusIndex }));

        }, [codeLength]);

        const handleInputChange = useCallback((value: string, index: number) => {
            if (!value.length) {
                handleAutoFocus(index - 1);
                return;
            }

            try {
                let numberValue: number | undefined = Number(value[value.length - 1]);
                if (isNaN(numberValue) || numberValue < 0) {
                    numberValue = undefined
                }

                setState(prevState => {
                    const newValues = prevState.value.map((value, currIndex) => {
                        if (index === currIndex) {
                            return numberValue;
                        }

                        return value;
                    });

                    return { ...prevState, value: newValues, focusIndex: numberValue ? index + 1 : index }
                });
            } catch (e) {
                console.error(e);
            }
        }, []);

        const handlePastEvent = useCallback((event: ClipboardEvent) => {
            const pastValue = event.clipboardData.getData('text');

            setState(prevState => ({ ...prevState, value: stringArrayToValue(pastValue) }))
        }, [stringArrayToValue]);

        const InputElement = useCallback(({ index }: { index: number }) => {

            return <InputField
                className={`w-12`}
                value={state.value[index]?.toString()}
                onPast={handlePastEvent}
                autoFocus={state.focusIndex === index}
                onChange={(e) => handleInputChange(e.target.value, index)} />
        }, [handleInputChange, handlePastEvent, state.value]);

        return (<div className={`flex justify-between gap-2 max-w-xs`}>
            {Array(codeLength).fill(0).map((_, index) => {

                return <InputElement index={index} />
            })}
        </div>)
    }
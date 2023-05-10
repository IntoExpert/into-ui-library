import { ClipboardEvent, useCallback, useMemo, useState } from "react";
import { InputField } from "../field";
import { InputFieldProps } from "../field/field";

export interface VerificationCodeInputProps extends InputFieldProps {
    codeLength?: number;
};

interface VerificationCodeInputState {
    value: (number | undefined)[];
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

        const [state, setState] = useState<VerificationCodeInputState>({ value: valuesArray });

        const handleInputChange = useCallback((value: string, index: number) => {
            try {
                let numberValue: number | undefined = Number(value);
                if (isNaN(numberValue) || numberValue < 0) numberValue = undefined;

                setState(prevState => {
                    const newValues = prevState.value.map((value, currIndex) => {
                        if (index === currIndex) {
                            return numberValue;
                        }

                        return value;
                    });

                    return { ...prevState, value: newValues }
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
                onChange={(e) => handleInputChange(e.target.value, index)} />
        }, [handleInputChange, handlePastEvent, state.value]);

        return (<div className={`flex justify-between gap-2 max-w-xs`}>
            {Array(codeLength).fill(0).map((_, index) => {

                return <InputElement index={index} />
            })}
        </div>)
    }
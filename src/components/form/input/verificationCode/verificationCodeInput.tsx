import { ClipboardEvent, KeyboardEvent, useCallback, useEffect, useMemo, useState } from "react";
import { InputField } from "../field";
import { UiElementProps } from "../../../common";

export interface VerificationCodeInputProps extends UiElementProps {
  codeLength?: number;
  value?: string;
  onChange?: (value: string) => void;
  acceptLetters?: boolean;
}

interface VerificationCodeInputState {
  value: (number | string | undefined)[];
  focusIndex: number;
}

export const VerificationCodeInput = ({
  codeLength = 6,
  value = "",
  onChange,
  className,
  acceptLetters,
}: VerificationCodeInputProps) => {
  const stringArrayToValue = useCallback(
    (stringValue: string) => {
      const array: (number | undefined)[] = Array(codeLength).fill(undefined);

      return array.map((currValue, index) => {
        if (index < stringValue.length) {
          let indexValue: number | string | undefined = stringValue[index];
          if (!acceptLetters) {
            indexValue = Number(stringValue[index]);
            if (isNaN(indexValue) || indexValue < 0) indexValue = undefined;
          }

          return indexValue;
        }

        return currValue;
      });
    },
    [codeLength, acceptLetters]
  );

  const valuesArray = useMemo(() => {
    return stringArrayToValue(value);
  }, [stringArrayToValue, value]);

  const [state, setState] = useState<VerificationCodeInputState>({
    value: valuesArray,
    focusIndex: 0,
  });

  const handleAutoFocus = useCallback(
    (focusIndex: number) => {
      if (focusIndex < 0 || focusIndex === codeLength) return;

      setState((prevState) => ({ ...prevState, focusIndex }));
    },
    [codeLength]
  );

  const handleInputChange = useCallback(
    (value: string, index: number) => {
      if (value.length) {
        if (value.match(/\d/) || acceptLetters) {
          handleAutoFocus(index + 1);
        }
      } else {
        handleAutoFocus(index - 1);
      }

      try {
        let numberValue: number | string | undefined = value[value.length - 1];

        if (!acceptLetters) {
          numberValue = Number(value[value.length - 1]);
          if (isNaN(numberValue) || numberValue < 0) {
            numberValue = undefined;
          }
        }

        setState((prevState) => {
          const newValues = prevState.value.map((value, currIndex) => {
            if (index === currIndex) {
              return numberValue;
            }

            return value;
          });

          return { ...prevState, value: newValues };
        });
      } catch (e) {
        console.error(e);
      }
    },
    [handleAutoFocus, acceptLetters]
  );

  const handleBackspace = useCallback(
    (e: KeyboardEvent<HTMLInputElement>, index: number) => {
      if (!["Backspace", "Delete"].includes(e.key) || e.currentTarget.value)
        return;
      handleAutoFocus(index - 1);
    },
    [handleAutoFocus]
  );

  const handlePastEvent = useCallback(
    (event: ClipboardEvent) => {
      event.preventDefault();

      const pastValue = event.clipboardData.getData("text");

      setState((prevState) => ({
        ...prevState,
        value: stringArrayToValue(pastValue),
      }));
    },
    [stringArrayToValue]
  );

  const InputElement = useCallback(
    ({ index }: { index: number }) => {
      return (
        <InputField
          key={index}
          className={`w-12 text-center`}
          value={state.value[index]?.toString()}
          onPast={handlePastEvent}
          autoFocus={state.focusIndex === index}
          onChange={(e) => handleInputChange(e.target.value, index)}
          onKeyDown={(e) => handleBackspace(e, index)}
        />
      );
    },
    [handleInputChange, handleBackspace, handlePastEvent, state]
  );

  // Check on change event
  useEffect(() => {
    if (state.value.some((value) => value === undefined)) {
      onChange?.("");
    } else {
      onChange?.(state.value.join(""));
    }
  }, [state.value, onChange]);

  return (
    <div dir='ltr' className={`flex justify-between gap-2 max-w-xs ${className}`}>
      {Array(codeLength)
        .fill(0)
        .map((_, index) => {
          return <InputElement key={index} index={index} />;
        })}
    </div>
  );
};
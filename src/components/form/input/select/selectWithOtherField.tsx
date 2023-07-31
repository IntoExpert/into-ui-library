import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import { InputField } from "../field";
import { Select, SelectProps } from "./select";
import { SelectOption } from "./option";
import { ActionMeta } from "react-select";
import { InputFieldProps } from "../field/field";

const OTHER_VALUE_KEY = 'otherValue';

export interface SelectWithOthersProps extends SelectProps {
    otherFieldId?: string;
    otherFieldProps?: InputFieldProps;
    /**
     * The onchange event that handle both the other field state, and the select state
     */
    onAllValuesChange?: (value: string[]) => void;
};

export const SelectWithOtherField = ({ otherFieldId = 'Other', onChange, onAllValuesChange, otherFieldProps, ...props }: SelectWithOthersProps) => {

    const [isOthersChecked, setIsOthersChecked] = useState(false);
    const [selectedValues, setSelectedValues] = useState<SelectOption[] | SelectOption | ''>('');
    const [othersValue, setOthersValue] = useState('');

    const otherOption: SelectOption = useMemo(() => {
        return props.options?.find((o: any) => o.value === otherFieldId) as SelectOption;
    }, [otherFieldId, props.options]);

    const checkIfHasOtherValues = useCallback((e: any) => {

        if (typeof e === 'object' && e?.value === otherFieldId) {
            return true;
        }

        if (Array.isArray(e) && e?.some((e: SelectOption) => e?.value === otherFieldId)) {
            return true;
        }

        return false;
    }, [otherFieldId]);

    const handleValuesChange = useCallback((selectValues = selectedValues, otherValue = othersValue) => {
        let value = Array.isArray(selectValues)
            ? [...selectValues]
            : typeof selectValues === 'string' ? [] : [{ ...selectValues }];

        if (checkIfHasOtherValues(value)) {
            if (props.isMulti) {
                (value as SelectOption[]).push({ label: OTHER_VALUE_KEY, value: otherValue })
            } else {
                value = [{
                    label: OTHER_VALUE_KEY,
                    value: otherValue
                },
                    otherOption]
            }
        }

        onAllValuesChange?.(value.map(v => v.value));
    }, [checkIfHasOtherValues, onAllValuesChange, othersValue, props.isMulti, selectedValues, otherOption]);

    const handleOnChange = useCallback((e: any | any[], actionMeta: ActionMeta<unknown>) => {
        setSelectedValues(e);
        if (checkIfHasOtherValues(e)) {
            setIsOthersChecked(true);
        } else {
            setIsOthersChecked(false);
            setOthersValue('');
        }

        onChange?.(e, actionMeta);
        handleValuesChange?.(e);
    }, [onChange, checkIfHasOtherValues, handleValuesChange]);

    useEffect(() => {
        const parentValue: string[] = props.value as any;

        if (!parentValue) return;

        const values = props.options?.filter((v: any) => parentValue.includes(v.value)) as SelectOption[];
        const hasOtherValue = checkIfHasOtherValues(values);

        const otherValue = hasOtherValue ? parentValue.find(v => props.options?.every((o: any) => o.value !== v)) ?? '' : '';

        setSelectedValues(values);
        setIsOthersChecked(hasOtherValue);
        setOthersValue(otherValue)

    }, [otherOption, props.value, otherFieldId, props.options, checkIfHasOtherValues]);

    const handleOthersInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setOthersValue(e.target.value);
        handleValuesChange(selectedValues, e.target.value);
    }, [handleValuesChange, selectedValues]);

    return <>
        <Select {...props} value={selectedValues} onChange={handleOnChange} />
        {isOthersChecked && <InputField
            className={`mt-1`}
            size="xs"
            placeholder="Other"
            {...otherFieldProps}
            value={othersValue}
            onChange={handleOthersInputChange} />}
    </>;
} 
import { useCallback, useEffect, useMemo, useState } from "react";
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
    onAllValuesChange?: (value: SelectOption | SelectOption[] | '') => void;
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

    const handleOnChange = useCallback((e: any | any[], actionMeta: ActionMeta<unknown>) => {
        setSelectedValues(e);
        if (checkIfHasOtherValues(e)) {
            setIsOthersChecked(true);
        } else {
            setIsOthersChecked(false);
            setOthersValue('');
        }

        onChange?.(e, actionMeta);
    }, [onChange, checkIfHasOtherValues]);

    useEffect(() => {
        let value = Array.isArray(selectedValues) ? [...selectedValues] : { ...selectedValues };

        if (checkIfHasOtherValues(value)) {
            if (props.isMulti) {
                (value as SelectOption[]).push({ label: OTHER_VALUE_KEY, value: othersValue })
            } else {
                value = {
                    label: OTHER_VALUE_KEY,
                    value: othersValue
                }
            }
        }

        onAllValuesChange?.(value);

    }, [checkIfHasOtherValues, othersValue, props.isMulti, selectedValues, onAllValuesChange]);

    useEffect(() => {
        const parentValue = props.value as any;

        if (props.isMulti && parentValue.some((v: SelectOption) => v.value === otherFieldId)) {
            setSelectedValues(parentValue.filter((v: SelectOption) => v.label !== OTHER_VALUE_KEY));
            const otherValue = parentValue.find((v: SelectOption) => v.label === OTHER_VALUE_KEY);
            setIsOthersChecked(true);
            setOthersValue(otherValue.value)
        } else if (!props.isMulti && parentValue?.label === OTHER_VALUE_KEY) {
            setSelectedValues([otherOption])
            setIsOthersChecked(true);
            setOthersValue(parentValue.value);
        } else {
            setSelectedValues(parentValue);
        }
    }, [otherOption, props.isMulti, props.value, otherFieldId]);

    return <>
        <Select {...props} value={selectedValues} onChange={handleOnChange} />
        {isOthersChecked && <InputField
            className={`mt-1`}
            size="xs"
            placeholder="Other"
            {...otherFieldProps}
            value={othersValue}
            onChange={e => setOthersValue(e.target.value)} />}
    </>;
} 
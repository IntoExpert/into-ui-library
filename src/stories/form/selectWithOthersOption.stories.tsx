import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SelectWithOtherField } from "../../components/form/input/select/selectWithOtherField";

export default {
    title: 'Form/SelectWithOthers',
    component: SelectWithOtherField,

} as ComponentMeta<typeof SelectWithOtherField>;

const colourOptions = [
    { value: "ocean1", label: "Ocean" },
    { value: "blue", label: "Blue" },
    { value: "purple", label: "Purple" },
    { value: "red", label: "Red" },
    { value: "orange", label: "Orange" },
    { value: "yellow", label: "Yellow" },
    { value: "green", label: "Green" },
    { value: "forest", label: "Forest" },
    { value: "slate", label: "Slate" },
    { value: "silver", label: "Silver" },
    { value: "Other", label: "Other" }
];

const Template: ComponentStory<typeof SelectWithOtherField> = (args) =>
    <SelectWithOtherField {...args} options={colourOptions} />;

export const Default = Template.bind({});

Default.args = {
    options: colourOptions,
    onAllValuesChange: (v) => console.log(v)
}

export const WithPresetValues = Template.bind({});

WithPresetValues.args = {
    value: {
        "label": "otherValue",
        "value": "The other field value"
    },
    options: colourOptions,
    onAllValuesChange: (v) => console.log(v)
}

export const MultiSelectWithPresetValues = Template.bind({});

MultiSelectWithPresetValues.args = {
    value: [
        { label: "otherValue", value: "The other field value" },
        { value: "orange", label: "Orange" },
        { value: "yellow", label: "Yellow" },
        { value: "Other", label: "Other" },
        { value: "green", label: "Green" },],
    isMulti: true,
    options: colourOptions,
    onAllValuesChange: (v) => console.log(v)
}
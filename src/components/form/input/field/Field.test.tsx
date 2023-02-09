import { InputField } from "./Field";
import { shallow, ShallowWrapper } from 'enzyme';

describe("Input field functionality", () => {
    let inputField, inputElement: ShallowWrapper;
    beforeEach(() => {
        inputField = shallow(<InputField defaultValue="Motasem" />);
        inputElement = inputField.find('input');
    });
    it("Render without crashing", () => {
        shallow(<InputField />);
    });

    it("Reflect the default value", () => {
        const value = inputElement.prop('value');
        expect(value).toEqual("Motasem");
    });

    it("Value is changed", () => {
        const newInput = inputElement.simulate('change', { target: { value: "New value" } });
        const value = newInput.prop('value');
        expect(value).not.toEqual("Motasem");
        expect(value).toEqual("New value");
    })
});
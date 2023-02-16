import { fireEvent, getAllByRole, render } from "@testing-library/react";
import { InputField } from "./field";

let container: any = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

describe("Input field functionality", () => {

    describe("Basice functionality and state", () => {

        it("Render without crashing", () => {
            render(<InputField defaultValue="Motasem" />, container);
        });

        it("Reflect the default value", () => {
            const inputField = render(<InputField data-testid="input" defaultValue="Motasem" />, container);
            const element = inputField.getByTestId("input");
            const value = element?.value;
            expect(value).toEqual("Motasem");
        });

        it("Value is changed", () => {
            const inputField = render(<InputField data-testid="input" defaultValue="Motasem" />, container);
            const element = inputField.getByTestId("input");
            fireEvent.change(element, { target: { value: "New value" } });
            expect(element.value).not.toEqual("Motasem");
            expect(element.value).toEqual("New value");
        })
    })
});
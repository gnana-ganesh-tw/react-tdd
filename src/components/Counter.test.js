import React from "react";
import {shallow} from "enzyme";
import {fireEvent, render, screen} from "@testing-library/react";
import Counter from "./Counter";


describe("Basic rendering of Counter", () => {
    it("should render Counter", () => {
        let counter = shallow(<Counter/>);

        expect(counter).toBeDefined();
    });

    it("should render counter value", () => {
        render(<Counter/>);

        let counter = screen.getByTestId("Counter");

        expect(counter).toHaveTextContent("0");
    })

    it("should render increment button enabled", () => {
        render(<Counter/>);

        let incrementButton = screen.getByRole("button", {name: "+"});

        expect(incrementButton).toBeDefined();
        expect(incrementButton).not.toBeDisabled();
    });

    it('should render decrement button disabled', () => {
        render(<Counter/>);

        let decrementButton = screen.getByRole("button", {name: "-"});

        expect(decrementButton).toBeDefined();
        expect(decrementButton).toBeDisabled();
    });
});

describe("Functionality of Counter", () => {
    it('should increment counter value', function () {
        render(<Counter/>);
        let counterValue = screen.getByRole("heading", {name: /Count/});
        let incrementButton = screen.getByRole("button", {name: "+"});

        fireEvent.click(incrementButton);

        expect(counterValue).toHaveTextContent("Count: 1");
    });

    it('should decrement counter value', function () {
        render(<Counter/>);
        let counterValue = screen.getByRole("heading", {name: /Count/});
        let decrementButton = screen.getByRole("button", {name: /-/});
        let incrementButton = screen.getByRole("button", {name: "+"});

        fireEvent.click(incrementButton);
        fireEvent.click(decrementButton);

        expect(counterValue).toHaveTextContent("Count: 0");
    });
})
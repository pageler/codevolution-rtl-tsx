import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter Component", () => {
    it("should render the Counter Component heading", () => {
        render(<Counter />);
        const counterHeadingElement = screen.getByRole("heading", {
            name: /counter component/i,
        });
        expect(counterHeadingElement).toBeInTheDocument();
    });

    it("should render count initial state of 0", () => {
        render(<Counter />);
        const initCountElement = screen.getByRole("heading", { name: /0/i });
        expect(initCountElement).toHaveTextContent("0");
    });

    it("should render a count of 1 when Increment button is clicked", async () => {
        user.setup();
        render(<Counter />);
        const incrementButton = screen.getByRole("button", {
            name: /increment/i,
        });
        await user.click(incrementButton);
        const countElement = screen.getByRole("heading", { name: /1/i });
        expect(countElement).toHaveTextContent("1");
    });

    it("should render a count of  when Increment button is clicked twice", async () => {
        user.setup();
        render(<Counter />);
        const incrementButton = screen.getByRole("button", {
            name: /increment/i,
        });
        await user.dblClick(incrementButton);
        const countElement = screen.getByRole("heading", { name: /2/i });
        expect(countElement).toHaveTextContent("2");
    });

    it("should render a count of 10 after clicking the Set Counter button", async () => {
        user.setup();
        render(<Counter />);
        const amountInput = screen.getByRole("spinbutton");
        await user.type(amountInput, "10");
        const setCounterButton = screen.getByRole("button", {
            name: /set counter/i,
        });
        await user.click(setCounterButton);
        const countElement = screen.getByRole("heading", { name: /10/i });
        expect(countElement).toHaveTextContent("10");
    });

    it("should focus on each element by tab in order", async () => {
        user.setup();
        render(<Counter />);
        const amountInput = screen.getByRole("spinbutton");
        const setCounterButton = screen.getByRole("button", {
            name: /set counter/i,
        });
        const incrementButton = screen.getByRole("button", {
            name: /increment/i,
        });
        await user.tab();
        expect(incrementButton).toHaveFocus();
        await user.tab();
        expect(amountInput).toHaveFocus();
        await user.tab();
        expect(setCounterButton).toHaveFocus();
    });
});

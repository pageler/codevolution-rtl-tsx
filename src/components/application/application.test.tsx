import { render, screen } from "@testing-library/react";
import Application from "./Application";

describe("Application Component", () => {
    /** getByRole */
    it("should render the title heading", () => {
        render(<Application />);
        const pageHeading = screen.getByRole("heading", {
            name: /job application form/i,
        });
        expect(pageHeading).toBeInTheDocument();
    });

    it("should render the section heading", () => {
        render(<Application />);
        const sectionHeading = screen.getByRole("heading", {
            name: /section 1/i,
        });
        expect(sectionHeading).toBeInTheDocument();
    });

    it("should render the Name element", () => {
        render(<Application />);
        const nameElement = screen.getByRole("textbox", {
            name: /name/i,
        });
        expect(nameElement).toBeInTheDocument();
    });

    it("should render the Bio element", () => {
        render(<Application />);
        const bioElement = screen.getByRole("textbox", {
            name: /bio/i,
        });
        expect(bioElement).toBeInTheDocument();
    });

    it("should render the Job Location element", () => {
        render(<Application />);
        const jobLocationElement = screen.getByRole("combobox", {
            name: /job location/i,
        });
        expect(jobLocationElement).toBeInTheDocument();
    });

    it("should render the Terms element", () => {
        render(<Application />);
        const termsElement = screen.getByRole("checkbox", {
            name: /i agree to the terms and conditions/i,
        });
        expect(termsElement).toBeInTheDocument();
    });

    it("should render the Submit button element", () => {
        render(<Application />);
        const submitElement = screen.getByRole("button", {
            name: /submit/i,
        });
        expect(submitElement).toBeInTheDocument();
        expect(submitElement).toBeDisabled();
    });

    /** getByLabelText */
    it("should render the Name input element", () => {
        render(<Application />);
        const nameElement2 = screen.getByLabelText("Name", {
            selector: "input",
        });
        expect(nameElement2).toBeInTheDocument();
    });

    it("should render the terms element", () => {
        render(<Application />);
        const termsElement2 = screen.getByLabelText(
            "I agree to the terms and conditions"
        );
        expect(termsElement2).toBeInTheDocument();
    });

    /** getByPlaceholderText */
    it("should render the input placeholder text Full Name element", () => {
        render(<Application />);
        const nameElement3 = screen.getByPlaceholderText(/full name/i);
        expect(nameElement3).toBeInTheDocument();
    });

    /** getByText */
    it("should render the HTML paragraph tag text element", () => {
        render(<Application />);
        const paragraphElement = screen.getByText("All fields are mandatory");
        expect(paragraphElement).toBeInTheDocument();
    });

    /** getByDisplayValue */
    it("should render the input value text element", () => {
        render(<Application />);
        const inputValueAttribute = screen.getByDisplayValue(/john paul/i);
        expect(inputValueAttribute).toBeInTheDocument();
    });

    /** getByAltText */
    it("should render the image alt element", () => {
        render(<Application />);
        const imageAltAttribute = screen.getByAltText("a person with a laptop");
        expect(imageAltAttribute).toBeInTheDocument();
    });

    /** getByTitle */
    it("should render the span title element", () => {
        render(<Application />);
        const spanTitleAttribute = screen.getByTitle("close");
        expect(spanTitleAttribute).toBeInTheDocument();
    });

    /** getByTitle */
    it("should render the data-testid element", () => {
        render(<Application />);
        const testidAttribute = screen.getByTestId("custom-element");
        expect(testidAttribute).toBeInTheDocument();
    });
});

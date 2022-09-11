import { render, screen } from "@testing-library/react";
import Application from "./Application";

describe("Application Component", () => {
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
});

//import { render, screen } from "@testing-library/react";
//import AppProviders from "src/providers/AppProviders";
//import MuiMode from "./MuiMode";

//describe("Material UP Component", () => {
//    it("should render the heading element", () => {
//        render(<MuiMode />);
//        const headingElement = screen.getByRole("heading", {
//            name: /material ui component/i,
//        });
//        expect(headingElement).toBeInTheDocument();
//    });

//    it("should render the light mode element", () => {
//        render(<MuiMode />);
//        const modeElement = screen.getByRole("heading", {
//            name: /light mode/i,
//        });
//        expect(modeElement).toBeInTheDocument();
//    });

//    /** Wrapper Provider for each AppProvider function */
//    it("should render the dark mode element", () => {
//        render(<MuiMode />, { wrapper: AppProviders });
//        const modeElement = screen.getByRole("heading", {
//            name: /dark mode/i,
//        });
//        expect(modeElement).toBeInTheDocument();
//    });
//});

/** Custom Render Function one AppProvider for all functions */
import { render, screen } from "../../test-utils";
import MuiMode from "./MuiMode";

describe("Material UP Component", () => {
    it("should render the heading element", () => {
        render(<MuiMode />);
        const headingElement = screen.getByRole("heading", {
            name: /material ui component/i,
        });
        expect(headingElement).toBeInTheDocument();
    });

    it("should render the dark mode element using test-utils.tex file", () => {
        render(<MuiMode />);
        const modeElement = screen.getByRole("heading", {
            name: /dark mode/i,
        });
        expect(modeElement).toBeInTheDocument();
    });
});

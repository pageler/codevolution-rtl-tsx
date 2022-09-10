/**
 * Component should render greeting and if a name is passed (i.e. name? optional)
 * into the component, it should render a greeting followed by the name.
 */

import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("Greet Component", () => {
    it("should render a greeting", () => {
        render(<Greet />);
        const textElement = screen.getByText(/Good day/i);
        expect(textElement).toBeInTheDocument();
    });

    it("should render a greeting with a name if a name is passed", () => {
        render(<Greet name="Monica" />);
        const textElement = screen.getByText(/Monica/i);
        expect(textElement).toBeInTheDocument();
    });
});

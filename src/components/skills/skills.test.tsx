import { logRoles, render, screen } from "@testing-library/react";
import { Skills } from "./Skills";

describe("Skills Component", () => {
    const skills = ["ts", "js", "css", "jsx", "tsx", "HTML"];
    it("should render skills component", () => {
        render(<Skills skills={skills} />);
        const listElement = screen.getByRole("list");
        expect(listElement).toBeInTheDocument();
    });

    it("should render skills list", () => {
        render(<Skills skills={skills} />);
        const listItemElements = screen.getAllByRole("listitem");
        expect(listItemElements).toHaveLength(skills.length);
    });

    it("should render Login button", () => {
        render(<Skills skills={skills} />);
        const loginButton = screen.getByRole("button", {
            name: /login/i,
        });
        expect(loginButton).toBeInTheDocument();
    });

    it("should not render Start learning button", () => {
        render(<Skills skills={skills} />);
        const startLearningButton = screen.queryByRole("button", {
            name: /start learning/i,
        });
        expect(startLearningButton).not.toBeInTheDocument();
    });

    it("should render Start Learning button after 3sec.", async () => {
        render(<Skills skills={skills} />);
        const startLearningButton = await screen.findByRole(
            "button",
            {
                name: /start learning/i,
            },
            { timeout: 4000 }
        );
        expect(startLearningButton).toBeInTheDocument();
    });

    /** screen.debug(); Remove when not when not needed */
    it("debugging Start Learning button after 3sec.", async () => {
        render(<Skills skills={skills} />);

        //screen.debug(); // View component tree before timeout
        const startLearningButton = await screen.findByRole(
            "button",
            {
                name: /start learning/i,
            },
            { timeout: 4000 }
        );
        //screen.debug(); // View component tree before timeout
        expect(startLearningButton).toBeInTheDocument();
    });

    /** List Nodes by Role: logRoles(); */
    it.only("printing list of tree Node Roles Start Learning button", async () => {
        const view = render(<Skills skills={skills} />);
        logRoles(view.container);
        const startLearningButton = await screen.findByRole(
            "button",
            {
                name: /start learning/i,
            },
            { timeout: 4000 }
        );
        expect(startLearningButton).toBeInTheDocument();
    });
});

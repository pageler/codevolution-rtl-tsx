import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export interface IAppProvidersProps {
    children: React.ReactNode;
}

// Mui Dark Theme Palette:
const theme = createTheme({
    palette: {
        mode: "dark", // or "light"
    },
});

const AppProviders: React.FunctionComponent<IAppProvidersProps> = ({
    children,
}) => {
    return (
        // ThemeProvider wrapper passing the Dark Theme:
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};

export default AppProviders;

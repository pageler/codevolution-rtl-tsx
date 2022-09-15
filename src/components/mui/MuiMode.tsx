import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";
import React from "react";

export interface IMuiModeProps {}

const MuiMode: React.FunctionComponent<IMuiModeProps> = (props) => {
    const theme = useTheme();

    return (
        <div>
            <h1 className="title">Material UI Component</h1>
            <Typography component="h2">{`${theme.palette.mode} mode`}</Typography>
        </div>
    );
};

export default MuiMode;

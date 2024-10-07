import React, { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import { config } from "./config";

const Theme = ({ children }: PropsWithChildren) => (
    <ThemeProvider theme={config}>{children}</ThemeProvider>
);

export default Theme;

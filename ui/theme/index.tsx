import React, { PropsWithChildren } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { config } from "./config";

const GlobalStyles = createGlobalStyle`
    body {
        background-color: rgba(60, 56, 215, 0.05);
    }
`;

const Theme = ({ children }: PropsWithChildren) => (
    <>
        <GlobalStyles />
        <ThemeProvider theme={config}>{children}</ThemeProvider>
    </>
);

export default Theme;

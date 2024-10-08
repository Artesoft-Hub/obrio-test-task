import React, { PropsWithChildren } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import { config } from "./config";

const GlobalStyles = createGlobalStyle`
    body {
        background-color: rgba(60, 56, 215, 0.05);
        margin: 0;
        padding: 0 16px;
    }

    h1, h2, h3, h4, h5 {
        margin: 0;
    }
`;

const Theme = ({ children }: PropsWithChildren) => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={config}>{children}</ThemeProvider>
  </>
);

export default Theme;

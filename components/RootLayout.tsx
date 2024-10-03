import React, { PropsWithChildren } from "react";
import Navbar from "./Navbar";

const RootLayout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    );
};

export default RootLayout;

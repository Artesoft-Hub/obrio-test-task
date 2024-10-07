import React, { PropsWithChildren } from "react";
import Navbar from "./organizms/Navbar";

const RootLayout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    );
};

export default RootLayout;

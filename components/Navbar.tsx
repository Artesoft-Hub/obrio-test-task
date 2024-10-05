import React from "react";
import Link from "next/link";
import NavigateBack from "./NavigateBack";
import { useHistory } from "./History";

const Navbar = () => {
    const historyManager = useHistory()!;
    const canGoBack = historyManager.canGoBack();

    return (
        <>
            {canGoBack && <NavigateBack />}
            <Link href="/">Navbar</Link>
        </>
    );
};

export default Navbar;

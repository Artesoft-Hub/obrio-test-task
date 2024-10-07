import Link from "next/link";
import React from "react";
import LogoPicture from "../atoms/LogoPicture";

const Logo = () => {
    return (
        <Link href="/">
            <LogoPicture />
        </Link>
    );
};

export default Logo;

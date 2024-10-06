import Link from "next/link";
import React from "react";

const NotFound = () => {
    return (
        <>
            <h2>Something went wrong</h2>
            <Link href="/">Let's see other quizzes</Link>
        </>
    );
};

export default NotFound;

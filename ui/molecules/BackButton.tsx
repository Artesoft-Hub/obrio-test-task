import { useRouter } from "next/router";
import React from "react";

const BackButton = () => {
    const router = useRouter();

    return <button onClick={() => router.back()}>Go back</button>;
};

export default BackButton;

import { useRouter } from "next/router";
import React from "react";
import { Button, ButtonVariant } from "../atoms/Button";
import BackIcon from "../atoms/BackIcon";

const BackButton = () => {
    const router = useRouter();

    return (
        <Button onClick={() => router.back()} variant={ButtonVariant.icon}>
            <BackIcon />
        </Button>
    );
};

export default BackButton;

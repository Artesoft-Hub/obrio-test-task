import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Quiz = () => {
    const router = useRouter();
    const { handle } = router.query;

    return (
        <div>
            Navigate to the{" "}
            <Link href={`/quiz/${handle}/q1`}>first question</Link>
        </div>
    );
};

export default Quiz;

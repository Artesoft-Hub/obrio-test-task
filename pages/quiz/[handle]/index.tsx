import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export const getStaticPaths: GetStaticPaths = async () => {
    return { paths: [{ params: { handle: "test-1" } }], fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
    console.log("PARAMS", context.params);

    return {
        props: { test: 1 },
    };
};

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

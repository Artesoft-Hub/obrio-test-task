import { NextApiAdapter } from "@/data/adapters/nextApi.adapter";
import { QuizDTO } from "@/domain/model/quiz.dto";
import { Quiz } from "@/domain/queries/Quiz";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type Props = {
    dto: QuizDTO;
};

export const getStaticPaths: GetStaticPaths = async () => {
    const adapter = new NextApiAdapter();
    const quizDTOs = await adapter.getAllQuizes();
    const paths = quizDTOs.map((dto) => ({
        params: {
            handle: dto.id,
        },
    }));

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props, { handle: string }> = async (
    context
) => {
    const { handle } = context.params!;
    const adapter = new NextApiAdapter();
    const dto = await adapter.getQuizByID(handle);

    return {
        props: { dto },
    };
};

const QuizWelcomeScreen = ({ dto }: Props) => {
    const quiz = new Quiz(dto);
    const router = useRouter();
    const { handle } = router.query;

    const title = quiz.getTitle();
    const description = quiz.getDescription();
    const firstQuestionID = quiz.getFirstQuestion().getId();

    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            Navigate to the{" "}
            <Link href={`/quiz/${handle}/${firstQuestionID}`}>
                first question
            </Link>
        </div>
    );
};

export default QuizWelcomeScreen;

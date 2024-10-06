import { NextApiAdapter } from "@/data/adapters/nextApi.adapter";
import { startQuiz } from "@/data/commands";
import { QuizDTO } from "@/domain/model/quiz.dto";
import { RootState } from "@/domain/model/store.dao";
import { getQuiz } from "@/domain/repositories/getQuiz";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";

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
    const quiz = getQuiz(dto);
    const router = useRouter();
    const { handle } = router.query;
    const results = useSelector((state: RootState) => state.quizzes.results);

    const title = quiz.getTitle();
    const description = quiz.getDescription();
    const firstQuestionID = quiz.getFirstQuestion().getId();

    const handleStart = () => {
        startQuiz(quiz.getId());
        router.push(`/quiz/${handle}/${firstQuestionID}`);
    };

    const handleResults = () => {
        router.push(`/quiz/${handle}/results`);
    };

    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            {quiz.getId()}
            {quiz.getId() in results && results[quiz.getId()].finished && (
                <button onClick={handleResults}>View results</button>
            )}
            <button onClick={handleStart}>Start quiz</button>
        </div>
    );
};

export default QuizWelcomeScreen;

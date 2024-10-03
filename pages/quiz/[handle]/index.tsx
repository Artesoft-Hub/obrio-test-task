import { NextApiAdapter } from "@/data/adapters/nextApi.adapter";
import { store } from "@/data/store/store";
import { StoreDAO } from "@/data/store/store.dao";
import { QuizDTO } from "@/domain/model/quiz.dto";
import { Quiz } from "@/domain/queries/Quiz";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useStore } from "react-redux";

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

    const handleClick = () => {
        const dao = new StoreDAO(store);
        dao.startQuiz(quiz.getId());
        router.push(`/quiz/${handle}/${firstQuestionID}`);
    };

    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={handleClick}>Start quiz</button>
        </div>
    );
};

export default QuizWelcomeScreen;

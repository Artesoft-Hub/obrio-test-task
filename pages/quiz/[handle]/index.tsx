import { SomeApiAdapter } from "@/data/adapters/someApi.adapter";
import { QuizDTO } from "@/domain/model/quiz.dto";
import { RootState } from "@/domain/model/store.dao";
import { getQuiz } from "@/domain/repositories/getQuiz";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import QuizWelcomeDesktop from "@/ui/organizms/QuizWelcomeDesktop";
import QuizWelcomeMobile from "@/ui/organizms/QuizWelcomeMobile";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { useSelector } from "react-redux";

type Props = {
    dto: QuizDTO;
};

export const getStaticPaths: GetStaticPaths = async () => {
    const adapter = new SomeApiAdapter();
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
    const adapter = new SomeApiAdapter();
    const dto = await adapter.getQuizByID(handle);

    return {
        props: { dto },
    };
};

const QuizWelcomeScreen = ({ dto }: Props) => {
    const quiz = getQuiz(dto);
    const isMobile = useMediaQuery();
    const results = useSelector((state: RootState) => state.quizzes.results);

    const Component = isMobile ? QuizWelcomeMobile : QuizWelcomeDesktop;

    return <Component quiz={quiz} results={results} />;
};

export default QuizWelcomeScreen;

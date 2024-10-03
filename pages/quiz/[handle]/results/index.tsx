import { NextApiAdapter } from "@/data/adapters/nextApi.adapter";
import { RootState } from "@/data/store/store";
import { QuizDTO } from "@/domain/model/quiz.dto";
import { GetStaticPaths, GetStaticProps } from "next";
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

const QuizResults = ({ dto }: Props) => {
    const results = useSelector(
        (state: RootState) => state.quizzes.results[dto.id]
    );
    console.log(results?.answers);
    return (
        <div>
            <h1>Quiz Results</h1>
            <ul>
                {results &&
                    results.answers.map(({ questionId, optionIds }) => {
                        const question = dto.questions.find(
                            (question) => question.id === questionId
                        );
                        const answer = question?.options
                            .filter((option) => optionIds.includes(option.id))
                            .map(dto => dto.title)
                            .join(", ");

                        return (
                            <li key={questionId}>
                                {question?.title} - {answer}
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
};

export default QuizResults;

import { NextApiAdapter } from "@/data/adapters/nextApi.adapter";
import { RootState } from "@/data/store/store";
import { QuestionType } from "@/domain/model/question.dto";
import { QuizDTO } from "@/domain/model/quiz.dto";
import { getQuestion } from "@/domain/repositories/getQuestion";
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

    const keys = results?.keys;

    return (
        <div>
            <h1>Quiz Results</h1>
            <ul>
                {results &&
                    results.answers.map(({ questionId, value }) => {
                        const questionDTO = dto.questions.find(
                            (question) => question.id === questionId
                        )!;

                        if (questionDTO.type === QuestionType.Info) {
                            return;
                        }

                        const question = getQuestion(questionDTO);
                        const answer = question.getResult(value);

                        return (
                            <li key={questionId}>
                                {question?.getTitle(keys)} - {answer}
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
};

export default QuizResults;

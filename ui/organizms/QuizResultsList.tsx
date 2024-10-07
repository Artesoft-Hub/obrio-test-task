import { QuestionType } from "@/domain/model/question.dto";
import { QuizQuery } from "@/domain/model/quiz.query";
import { QuizResultDTO } from "@/domain/model/result.dto";
import React from "react";
import Heading from "../atoms/Heading";
import Typography from "../atoms/Typography";

type Props = {
    quiz: QuizQuery;
    results: QuizResultDTO | undefined;
};

const QuizResultsList = ({ quiz, results }: Props) => {
    if (!results) {
        return (
            <Heading h={2}>Looks like you didn't finish this quiz !</Heading>
        );
    }

    const questions = quiz.getQuestions();
    const { answers, keys } = results;

    return (
        <>
            {answers.map(({ questionId, value }) => {
                const question = questions.find(
                    (question) => question.getId() === questionId
                )!;

                if (question.getType() === QuestionType.Info) {
                    return;
                }

                const answer = question.getResult(value);

                return (
                    <div key={questionId}>
                        <strong>
                            <Typography>{question?.getTitle(keys)}</Typography>
                        </strong>{" "}
                        -{" "}
                        <em>
                            <Typography>{answer}</Typography>
                        </em>
                    </div>
                );
            })}
        </>
    );
};

export default QuizResultsList;

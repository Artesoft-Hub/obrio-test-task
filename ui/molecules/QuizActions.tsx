import React from "react";
import { Button, ButtonVariant } from "../atoms/Button";
import { QuizQuery } from "@/domain/model/quiz.query";
import { QuizResultDTO } from "@/domain/model/result.dto";
import { useRouter } from "next/router";
import { startQuiz } from "@/data/commands";
import Flex, { Gap } from "../atoms/Flex";

type Props = {
    quiz: QuizQuery;
    results: { [quizId: string]: QuizResultDTO };
};

const QuizActions = ({ quiz, results }: Props) => {
    const router = useRouter();
    const hasResults = quiz.hasResults(results);
    const id = quiz.getId();
    const firstQuestionID = quiz.getFirstQuestion().getId();

    const handleStart = () => {
        startQuiz(quiz.getId());
        router.push(`/quiz/${id}/${firstQuestionID}`);
    };

    const handleResults = () => {
        router.push(`/quiz/${id}/results`);
    };

    return (
        <Flex gap={Gap.Medium}>
            <Button onClick={handleStart}>Start quiz</Button>
            {hasResults && (
                <Button variant={ButtonVariant.outline} onClick={handleResults}>View results</Button>
            )}
        </Flex>
    );
};

export default QuizActions;

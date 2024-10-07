import React from "react";
import Grid, { Gap } from "../atoms/Grid";
import { QuizQuery } from "@/domain/model/quiz.query";
import QuizCard from "./QuizCard";

type Props = {
    quizzes: QuizQuery[];
};

const QuizCardList = ({ quizzes }: Props) => {
    return (
        <Grid columns={3} gap={Gap.SemiBig}>
            {quizzes.map((quiz) => (
                <QuizCard key={quiz.getId()} quiz={quiz} />
            ))}
        </Grid>
    );
};

export default QuizCardList;

import React from "react";

import { QuizQuery } from "@/domain/model/quiz.query";

import { useMediaQuery } from "@/hooks/useMediaQuery";

import Grid, { Gap } from "../atoms/Grid";
import QuizCard from "./QuizCard";

type Props = {
  quizzes: QuizQuery[];
};

const QuizCardList = ({ quizzes }: Props) => {
  const isMobile = useMediaQuery();
  const columns = isMobile ? 1 : 3;

  return (
    <Grid columns={columns} gap={Gap.SemiBig}>
      {quizzes.map((quiz) => (
        <QuizCard key={quiz.getId()} quiz={quiz} />
      ))}
    </Grid>
  );
};

export default QuizCardList;

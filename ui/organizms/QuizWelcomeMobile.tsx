import React from "react";

import { QuizQuery } from "@/domain/model/quiz.query";
import { QuizResultDTO } from "@/domain/model/result.dto";

import Flex from "../atoms/Flex";
import { Gap } from "../atoms/Grid";
import { Space } from "../atoms/Space";
import QuizActions from "../molecules/QuizActions";
import QuizInfo from "../molecules/QuizInfo";

type Props = {
  quiz: QuizQuery;
  results: {
    [quizId: string]: QuizResultDTO;
  };
};

const QuizWelcomeMobile = ({ quiz, results }: Props) => {
  const title = quiz.getTitle();
  const description = quiz.getDescription();

  return (
    <Space mt={20}>
      <Flex direction="column" gap={Gap.SemiBig}>
        <QuizInfo title={title} description={description} />
        <QuizActions quiz={quiz} results={results} />
      </Flex>
    </Space>
  );
};

export default QuizWelcomeMobile;

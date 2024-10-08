import React from "react";
import { styled } from "styled-components";

import { ValidValue } from "@/domain/model/option.dto";
import { OptionQuery } from "@/domain/model/option.query";
import { QuestionQuery } from "@/domain/model/question.query";
import { QuizResultDTO } from "@/domain/model/result.dto";

import Flex, { Gap } from "@/ui/atoms/Flex";
import QuestionTitle from "@/ui/molecules/QuestionTitle";

import QuizOptions from "../QuizOptions";

type Props = {
  result: QuizResultDTO | undefined;
  question: QuestionQuery;
  submitAnswer: (option: OptionQuery, customValue?: ValidValue) => void;
};

const Container = styled(Flex)`
  max-width: 400px;
  margin: 0 auto;
`;

const OptionSelect = ({ question, submitAnswer, result }: Props) => {
  const title = question.getTitle(result?.keys);
  const options = question.getOptions();

  return (
    <Container alignitems="center" direction="column" gap={Gap.Bigger}>
      <QuestionTitle title={title} />
      <QuizOptions
        options={options}
        submitAnswer={submitAnswer}
        result={result}
      />
    </Container>
  );
};

export default OptionSelect;

import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { ValidValue } from "@/domain/model/option.dto";
import { OptionQuery } from "@/domain/model/option.query";
import { QuestionQuery } from "@/domain/model/question.query";
import { QuizResultDTO } from "@/domain/model/result.dto";

import { Button } from "@/ui/atoms/Button";
import Flex, { Gap } from "@/ui/atoms/Flex";
import { Input } from "@/ui/atoms/Input";
import QuestionTitle from "@/ui/molecules/QuestionTitle";

type Props = {
  result: QuizResultDTO | undefined;
  question: QuestionQuery;
  submitAnswer: (option: OptionQuery, customValue?: ValidValue) => void;
};

const Container = styled(Flex)`
  max-width: 250px;
  margin: 0 auto;
`;

const TextInput = ({ question, submitAnswer, result }: Props) => {
  const [value, setValue] = useState("");
  const title = question.getTitle(result?.keys);
  const options = question.getOptions();

  useEffect(() => {
    const currentAnswer = result?.answers.find(
      (answer) => question.getId() === answer.questionId
    );

    if (currentAnswer) {
      setValue(currentAnswer.value.toString());
    }
  }, [result]);

  const handleSubmit = (option: OptionQuery) => {
    submitAnswer(option, value);
  };

  return (
    <Container alignitems="center" direction="column" gap={Gap.Bigger}>
      <QuestionTitle title={title} />
      <Input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Start typing..."
      />
      <Flex gap={Gap.Medium}>
        {options.map((option: OptionQuery) => (
          <Button key={option.getId()} onClick={() => handleSubmit(option)}>
            {option.getTitle()}
          </Button>
        ))}
      </Flex>
    </Container>
  );
};

export default TextInput;

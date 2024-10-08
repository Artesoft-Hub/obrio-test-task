import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";

import { QuizDTO } from "@/domain/model/quiz.dto";
import { RootState } from "@/domain/model/store.dao";
import { getQuiz } from "@/domain/repositories/getQuiz";

import { SomeApiAdapter } from "@/data/adapters/someApi.adapter";

import Flex, { Gap } from "@/ui/atoms/Flex";
import Heading from "@/ui/atoms/Heading";
import { Space } from "@/ui/atoms/Space";
import QuizResultsList from "@/ui/organizms/QuizResultsList";

type Props = {
  dto: QuizDTO;
};

const Container = styled(Flex)`
  margin: 0 auto;
`;

export const getStaticPaths: GetStaticPaths = async () => {
  const adapter = new SomeApiAdapter();
  const quizDTOs = await adapter.getAllQuizes();
  const paths = quizDTOs.map((dto) => ({
    params: {
      quizID: dto.id,
    },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props, { quizID: string }> = async (
  context
) => {
  const { quizID } = context.params!;
  const adapter = new SomeApiAdapter();
  const dto = await adapter.getQuizByID(quizID);

  return {
    props: { dto },
  };
};

const QuizResults = ({ dto }: Props) => {
  const quiz = getQuiz(dto);
  const results = useSelector(
    (state: RootState) => state.quizzes.results[dto.id]
  );

  return (
    <Container direction="column" gap={Gap.Big}>
      <Space mt={40}>
        <Heading h={2}>Quiz Results</Heading>
      </Space>
      <QuizResultsList results={results} quiz={quiz} />
    </Container>
  );
};

export default QuizResults;

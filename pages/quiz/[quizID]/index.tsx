import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { useSelector } from "react-redux";

import { QuizDTO } from "@/domain/model/quiz.dto";
import { RootState } from "@/domain/model/store.dao";
import { getQuiz } from "@/domain/repositories/getQuiz";

import { SomeApiAdapter } from "@/data/adapters/someApi.adapter";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import QuizWelcomeDesktop from "@/ui/organizms/QuizWelcomeDesktop";
import QuizWelcomeMobile from "@/ui/organizms/QuizWelcomeMobile";

type Props = {
  dto: QuizDTO;
};

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

const QuizWelcomeScreen = ({ dto }: Props) => {
  const quiz = getQuiz(dto);
  const isMobile = useMediaQuery();
  const results = useSelector((state: RootState) => state.quizzes.results);

  const Component = isMobile ? QuizWelcomeMobile : QuizWelcomeDesktop;

  return <Component quiz={quiz} results={results} />;
};

export default QuizWelcomeScreen;

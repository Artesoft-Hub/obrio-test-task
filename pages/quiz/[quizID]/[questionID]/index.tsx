import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { ValidValue } from "@/domain/model/option.dto";
import { OptionQuery } from "@/domain/model/option.query";
import { QuestionDTO, QuestionType } from "@/domain/model/question.dto";
import { QuestionQuery } from "@/domain/model/question.query";
import { QuizDTO } from "@/domain/model/quiz.dto";
import { QuizResultDTO } from "@/domain/model/result.dto";
import { RootState } from "@/domain/model/store.dao";
import { getQuestion } from "@/domain/repositories/getQuestion";
import { getQuiz } from "@/domain/repositories/getQuiz";

import { SomeApiAdapter } from "@/data/adapters/someApi.adapter";
import { answerQuestion, finishQuiz, setQuestionKey } from "@/data/commands";

import UnknownScreen from "@/ui/UnknownScreen";
import Info from "@/ui/organizms/screens/Info";
import OptionSelect from "@/ui/organizms/screens/OptionSelect";
import TextInput from "@/ui/organizms/screens/TextInput";

type Props = {
  questionDTO: QuestionDTO;
  quizDTO: QuizDTO;
};

type ScreenProps = {
  result: QuizResultDTO | undefined;
  question: QuestionQuery;
  submitAnswer: (option: OptionQuery, customValue?: ValidValue) => void;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const adapter = new SomeApiAdapter();
  const quizDTOs = await adapter.getAllQuizes();
  const paths = quizDTOs.flatMap((quiz) =>
    quiz.questions.map((dto) => ({
      params: { quizID: quiz.id, questionID: dto.id },
    }))
  );

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<
  Props,
  { quizID: string; questionID: string }
> = async (context) => {
  const { quizID, questionID } = context.params!;

  const adapter = new SomeApiAdapter();
  const quizDTO = await adapter.getQuizByID(quizID);
  const questionDTO = quizDTO.questions.find((dto) => dto.id === questionID)!;

  return {
    props: { questionDTO, quizDTO },
  };
};

const TYPE_TO_SCREEN = new Map<QuestionType, React.FC<ScreenProps>>([
  [QuestionType.Info, Info],
  [QuestionType.OptionSelect, OptionSelect],
  [QuestionType.TextInput, TextInput],
]);

export default function QuizQuestion({ questionDTO, quizDTO }: Props) {
  const results = useSelector((state: RootState) => state.quizzes.results);
  const router = useRouter();
  const [currentResult, setCurrentResult] = useState<QuizResultDTO>();

  const question = getQuestion(questionDTO);
  const quiz = getQuiz(quizDTO);
  const questionID = question.getId();
  const quizID = quiz.getId();

  const type = question.getType();
  const questionKey = question.getStoredKey();

  const checkIfQuestionAvailable = () => {
    const currentResult = results[quizID];

    if (!currentResult) {
      return router.push(`/quiz/${quizID}`);
    }

    const isAccessible = quiz.isQuestionAvailable(currentResult, questionID);

    if (!isAccessible) {
      return router.back();
    }

    setCurrentResult(currentResult);
  };

  const Component = TYPE_TO_SCREEN.get(type) ?? UnknownScreen;

  useEffect(() => {
    checkIfQuestionAvailable();
  }, [questionID]);

  const handleSubmit = (
    selectedOption: OptionQuery,
    customValue?: ValidValue
  ) => {
    const answer = customValue ?? selectedOption.getValue()!;

    answerQuestion(quizID, question.getId(), answer);

    if (questionKey && answer) {
      setQuestionKey(quizID, questionKey, answer);
    }

    const isLast = selectedOption.isLast();

    if (isLast) {
      finishQuiz(quizID);
      return router.push(`/quiz/${quizID}/results`);
    }

    const next = selectedOption.getNextQuestionId();

    router.push(`/quiz/${quizID}/${next}`);
  };

  return (
    <Component
      question={question}
      result={currentResult}
      submitAnswer={handleSubmit}
    />
  );
}

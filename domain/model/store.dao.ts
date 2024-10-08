import { ValidValue } from "./option.dto";
import { QuizResultDTO } from "./result.dto";

export interface QuizzesState {
  results: {
    [quizId: string]: QuizResultDTO;
  };
}

export interface QuizID {
  quizId: string;
}
export interface QuestionID {
  questionId: string;
}
export interface Value {
  value: ValidValue;
}

export interface Key {
  key: string;
}

export interface RootState {
  quizzes: QuizzesState;
}

export interface StoreDAO {
  startQuiz: (id: string) => void;
  finishQuiz: (id: string) => void;
  answerQuestion: (
    quizId: string,
    questionId: string,
    value: ValidValue
  ) => void;
  setKey: (quizId: string, key: string, value: ValidValue) => void;
}

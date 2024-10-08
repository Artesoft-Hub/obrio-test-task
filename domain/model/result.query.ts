import { AnswerDTO } from "./result.dto";

export interface QuizResultQuery {
  getLastAnswer: () => AnswerDTO | undefined;
  getAnswers: () => AnswerDTO[];
}

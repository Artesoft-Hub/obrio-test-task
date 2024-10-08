import { QuestionDTO } from "./question.dto";

export interface QuizDTO {
  id: string;
  title: string;
  description: string;
  questions: QuestionDTO[];
}

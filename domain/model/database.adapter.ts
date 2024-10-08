import { QuizDTO } from "./quiz.dto";

export interface DatabaseAdapter {
  getAllQuizes: () => Promise<QuizDTO[]>;
  getQuizByID: (id: string) => Promise<QuizDTO>;
}

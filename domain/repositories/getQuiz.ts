import { QuizDTO } from "../model/quiz.dto";
import { Quiz } from "../queries/Quiz";

export const getQuiz = (dto: QuizDTO) => new Quiz(dto);

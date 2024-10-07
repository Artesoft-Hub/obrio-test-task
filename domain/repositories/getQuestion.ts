import { QuestionDTO } from "../model/question.dto";
import { Question } from "../queries/Question";

export const getQuestion = (dto: QuestionDTO) => new Question(dto);

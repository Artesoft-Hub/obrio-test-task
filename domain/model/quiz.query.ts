import { QuestionQuery } from "./question.query";

export interface QuizQuery {
    getId(): string;
    getQuestions: () => QuestionQuery[];
}

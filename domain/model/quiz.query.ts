import { QuestionQuery } from "./question.query";

export interface QuizQuery {
    getQuestions: () => QuestionQuery[];
    getResult: () => any;
    isSubmitted: () => boolean;
}

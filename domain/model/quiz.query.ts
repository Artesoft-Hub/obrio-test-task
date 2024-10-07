import { QuestionQuery } from "./question.query";
import { QuizResultDTO } from "./result.dto";

export interface QuizQuery {
    getId: () => string;
    getTitle: () => string;
    getDescription: () => string;
    getQuestions: () => QuestionQuery[];
    getFirstQuestion: () => QuestionQuery;
    hasResults: (results: { [quizId: string]: QuizResultDTO }) => boolean;
}

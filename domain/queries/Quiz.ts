import { QuestionQuery } from "../model/question.query";
import { QuizDTO } from "../model/quiz.dto";
import { QuizQuery } from "../model/quiz.query";

export class Quiz implements QuizQuery {
    constructor(private readonly dto: QuizDTO) {}

    getQuestions(): QuestionQuery[] {
        return [];
    }

    getResult(): any {
        return null;
    }

    isSubmitted(): boolean {
        return false;
    }
}

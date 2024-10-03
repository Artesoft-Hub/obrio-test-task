import { QuestionQuery } from "../model/question.query";
import { QuizDTO } from "../model/quiz.dto";
import { QuizQuery } from "../model/quiz.query";
import { Question } from "./Question";

export class Quiz implements QuizQuery {
    constructor(private readonly dto: QuizDTO) {}

    getId(): string {
        return this.dto.id;
    }

    getTitle(): string {
        return this.dto.title;
    }

    getDescription(): string {
        return this.dto.description;
    }

    getFirstQuestion(): QuestionQuery {
        return new Question(this.dto.questions[0]);
    }

    getQuestions(): QuestionQuery[] {
        return this.dto.questions.map((dto) => new Question(dto));
    }

    getResult(): any {
        return null;
    }

    isSubmitted(): boolean {
        return false;
    }
}

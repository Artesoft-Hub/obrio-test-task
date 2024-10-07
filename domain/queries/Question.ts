import { ValidValue } from "../model/option.dto";
import { OptionQuery } from "../model/option.query";
import { QuestionDTO, QuestionType } from "../model/question.dto";
import { QuestionQuery } from "../model/question.query";
import { QuizResultDTO } from "../model/result.dto";
import { Option } from "./Option";

export class Question implements QuestionQuery {
    constructor(private readonly dto: QuestionDTO) {}

    getId(): string {
        return this.dto.id;
    }

    getTitle(keys: { [key: string]: ValidValue }): string {
        if (!keys) {
            return this.dto.title;
        }

        return this.mapKeysToTitle(this.dto.title, keys);
    }

    getDescription(): string | undefined {
        return this.dto.description;
    }

    getType(): QuestionType {
        return this.dto.type;
    }

    getOptions(): OptionQuery[] {
        return this.dto.options.map((dto) => new Option(dto));
    }

    getStoredKey(): string | undefined {
        return this.dto.store_key;
    }

    getResult(value: any): string {
        if (this.dto.type !== QuestionType.OptionSelect) {
            return this.getCustomResult(value);
        }

        return this.getOptionResult(value);
    }

    isQuestionAccessible(quizResult: QuizResultDTO): boolean {
        // If the quiz is finished, no question should be accessible
        if (quizResult.finished) {
            return false;
        }

        // Check if the question is already answered
        const questionAnswered = quizResult.answers.some(
            (answer) => answer.questionId === this.dto.id
        );

        // If the question is answered, it may not need to be accessed again
        if (questionAnswered) {
            return false;
        }

        // Optionally: Check if the question is the next unanswered question
        const unansweredQuestions = quizResult.answers.filter(
            (answer) => !answer.value
        );
        const nextQuestionId =
            unansweredQuestions.length > 0
                ? unansweredQuestions[0].questionId
                : null;

        // If the current questionId is the next question to be answered, return true
        return this.dto.id === nextQuestionId;
    }

    private getCustomResult(data: any): string {
        return typeof data === "object" ? data.toString() : data;
    }

    private getOptionResult(data: any): string {
        const selectedOption = this.dto.options.find(
            (option) => option.value === data
        )!;

        return selectedOption.title;
    }

    private mapKeysToTitle(
        title: string,
        keys: { [key: string]: ValidValue }
    ): string {
        return (
            title
                // Replace placeholders keys like {{key}}
                .replace(
                    /{{(.*?)}}/g,
                    (_, key) => keys[key.trim()]?.toString() || ""
                )
                // Handle conditional logic {text (condition)}
                .replace(/\{(.*?)\((.*?)\)\}/g, (_, text, condition) =>
                    keys[condition.trim()] ? text : ""
                )
        );
    }
}

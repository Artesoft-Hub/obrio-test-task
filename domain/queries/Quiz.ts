import { QuestionQuery } from "../model/question.query";
import { QuizDTO } from "../model/quiz.dto";
import { QuizQuery } from "../model/quiz.query";
import { QuizResultDTO } from "../model/result.dto";
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

    isQuestionAvailable(
        quizResult: QuizResultDTO,
        targetQuestionId: string
    ): boolean {
        const quiz = this.dto;
        const answeredQuestions = new Set(
            quizResult.answers.map((a) => a.questionId)
        );

        // Helper function to check if a question is reachable
        function isReachable(
            currentQuestionId: string,
            visited: Set<string>
        ): boolean {
            if (currentQuestionId === targetQuestionId) {
                return true;
            }

            if (visited.has(currentQuestionId)) {
                return false; // Avoid infinite loops
            }

            visited.add(currentQuestionId);

            const currentQuestion = quiz.questions.find(
                (q) => q.id === currentQuestionId
            );
            if (!currentQuestion) {
                return false;
            }

            // If this question hasn't been answered, we can't proceed further
            if (!answeredQuestions.has(currentQuestionId)) {
                return currentQuestionId === targetQuestionId;
            }

            const userAnswer = quizResult.answers.find(
                (a) => a.questionId === currentQuestionId
            );
            if (!userAnswer) {
                return false;
            }

            // Check all options that match the user's answer
            // This handles cases where multiple options might have the same value
            const matchingOptions = currentQuestion.options.filter(
                (o) => o.value === userAnswer.value
            );

            for (const option of matchingOptions) {
                if (option.nextQuestion === null) {
                    // If this is an end point, the target should be this question
                    return currentQuestionId === targetQuestionId;
                }
                if (isReachable(option.nextQuestion, new Set(visited))) {
                    return true;
                }
            }

            return false;
        }

        return isReachable(quiz.questions[0].id, new Set());
    }
}

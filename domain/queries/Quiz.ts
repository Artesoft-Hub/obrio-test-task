import { QuestionDTO, QuestionType } from "../model/question.dto";
import { QuestionQuery } from "../model/question.query";
import { QuizDTO } from "../model/quiz.dto";
import { QuizQuery } from "../model/quiz.query";
import { AnswerDTO, QuizResultDTO } from "../model/result.dto";
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

    hasResults(results: { [quizId: string]: QuizResultDTO }): boolean {
        const { id } = this.dto;
        return id in results && results[id].finished;
    }

    isQuestionAvailable(
        quizResult: QuizResultDTO,
        targetQuestionId: string
    ): boolean {
        const answeredQuestions = new Set(
            quizResult.answers.map((a) => a.questionId)
        );
        return this.isReachable(
            this.dto.questions[0].id,
            new Set(),
            targetQuestionId,
            answeredQuestions,
            quizResult
        );
    }

    private isReachable(
        currentQuestionId: string,
        visited: Set<string>,
        targetQuestionId: string,
        answeredQuestions: Set<string>,
        quizResult: QuizResultDTO
    ): boolean {
        if (currentQuestionId === targetQuestionId) {
            return true;
        }

        if (visited.has(currentQuestionId)) {
            return false; // Avoid infinite loops
        }

        visited.add(currentQuestionId);

        const currentQuestion = this.dto.questions.find(
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

        // Handle different question types
        switch (currentQuestion.type) {
            case QuestionType.OptionSelect:
                return this.handleOptionSelect(
                    currentQuestion,
                    userAnswer,
                    visited,
                    targetQuestionId,
                    answeredQuestions,
                    quizResult
                );
            case QuestionType.TextInput:
                return this.handleTextInput(
                    currentQuestion,
                    visited,
                    targetQuestionId,
                    answeredQuestions,
                    quizResult
                );
            case QuestionType.Info:
                return this.handleInfo(
                    currentQuestion,
                    visited,
                    targetQuestionId,
                    answeredQuestions,
                    quizResult
                );
            default:
                console.warn(`Unknown question type: ${currentQuestion.type}`);
                return false;
        }
    }

    private handleOptionSelect(
        question: QuestionDTO,
        userAnswer: AnswerDTO,
        visited: Set<string>,
        targetQuestionId: string,
        answeredQuestions: Set<string>,
        quizResult: QuizResultDTO
    ): boolean {
        const selectedOption = question.options.find(
            (o) => o.value === userAnswer.value
        );
        if (!selectedOption) {
            return false;
        }

        if (selectedOption.nextQuestion === null) {
            return question.id === targetQuestionId;
        }

        return this.isReachable(
            selectedOption.nextQuestion,
            new Set(visited),
            targetQuestionId,
            answeredQuestions,
            quizResult
        );
    }

    private handleTextInput(
        question: QuestionDTO,
        visited: Set<string>,
        targetQuestionId: string,
        answeredQuestions: Set<string>,
        quizResult: QuizResultDTO
    ): boolean {
        // For text input, we always proceed to the next question
        const nextQuestion = question.options[0]?.nextQuestion;
        if (!nextQuestion) {
            return question.id === targetQuestionId;
        }

        return this.isReachable(
            nextQuestion,
            new Set(visited),
            targetQuestionId,
            answeredQuestions,
            quizResult
        );
    }

    private handleInfo(
        question: QuestionDTO,
        visited: Set<string>,
        targetQuestionId: string,
        answeredQuestions: Set<string>,
        quizResult: QuizResultDTO
    ): boolean {
        // For info type, we always proceed to the next question
        const nextQuestion = question.options[0]?.nextQuestion;
        if (!nextQuestion) {
            return question.id === targetQuestionId;
        }

        return this.isReachable(
            nextQuestion,
            new Set(visited),
            targetQuestionId,
            answeredQuestions,
            quizResult
        );
    }
}

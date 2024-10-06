export interface AnswerDTO {
    questionId: string;
    value: string | number | undefined;
}

export interface QuizResultDTO {
    finished: boolean;
    keys: {
        [key: string]: string | number;
    };
    answers: AnswerDTO[];
}

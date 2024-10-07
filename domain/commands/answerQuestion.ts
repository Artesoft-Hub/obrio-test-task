import { StoreDAO } from "../model/store.dao";

export const answerQuestion =
    (store: StoreDAO) => (quizId: string, questionId: string, value: any) => {
        store.answerQuestion(quizId, questionId, value);
    };

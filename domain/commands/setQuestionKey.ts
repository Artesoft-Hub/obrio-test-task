import { StoreDAO } from "../model/store.dao";

export const setQuestionKey =
    (store: StoreDAO) => (quizId: string, key: string, value: unknown) => {
        store.setKey(quizId, key, value);
    };

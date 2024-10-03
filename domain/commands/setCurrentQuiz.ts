import { StoreDAO } from "../model/store.dao";

export const setCurrentQuiz = (store: StoreDAO) => (id: string) => {
    return store.setCurrentQuiz(id);
};

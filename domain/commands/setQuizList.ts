import { StoreDAO } from "../model/store.dao";

export const setQuizList = (store: StoreDAO) => async () => {
    store.setQuizzes();
};

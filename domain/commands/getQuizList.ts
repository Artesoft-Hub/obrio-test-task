import { StoreDAO } from "../model/store.dao";

export const getQuizList = (store: StoreDAO) => () => {
    return store.getQuizzes();
};

import { StoreDAO } from "../model/store.dao";

export const startQuiz = (store: StoreDAO) => (id: string) => {
  store.startQuiz(id);
};

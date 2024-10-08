import { StoreDAO } from "../model/store.dao";

export const finishQuiz = (store: StoreDAO) => (id: string) => {
  store.finishQuiz(id);
};

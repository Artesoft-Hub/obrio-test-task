import { ValidValue } from "../model/option.dto";
import { StoreDAO } from "../model/store.dao";

export const answerQuestion =
  (store: StoreDAO) =>
  (quizId: string, questionId: string, value: ValidValue | undefined) => {
    store.answerQuestion(quizId, questionId, value);
  };

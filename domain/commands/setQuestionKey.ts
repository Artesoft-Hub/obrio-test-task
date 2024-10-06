import { ValidValue } from "../model/option.dto";
import { StoreDAO } from "../model/store.dao";

export const setQuestionKey =
    (store: StoreDAO) => (quizId: string, key: string, value: ValidValue) => {
        store.setKey(quizId, key, value);
    };

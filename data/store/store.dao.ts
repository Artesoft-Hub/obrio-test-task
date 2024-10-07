import { Store } from "@reduxjs/toolkit";
import { StoreDAO as StoreDAOModel } from "@/domain/model/store.dao";
import { answerQuestion, finishQuiz, startQuiz, setKey } from "./store";
import { ValidValue } from "@/domain/model/option.dto";

export class StoreDAO implements StoreDAOModel {
    constructor(private readonly store: Store) {}

    startQuiz(quizId: string) {
        this.store.dispatch(startQuiz({ quizId }));
    }

    answerQuestion(quizId: string, questionId: string, value: any) {
        this.store.dispatch(answerQuestion({ quizId, questionId, value }));
    }

    finishQuiz(quizId: string) {
        this.store.dispatch(finishQuiz({ quizId }));
    }

    setKey(quizId: string, key: string, value: ValidValue) {
        this.store.dispatch(setKey({ quizId, key, value }));
    }
}

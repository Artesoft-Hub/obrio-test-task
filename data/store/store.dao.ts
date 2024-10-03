import { Store } from "@reduxjs/toolkit";
import { StoreDAO as StoreDAOModel } from "@/domain/model/store.dao";
import { answerQuestion, finishQuiz, startQuiz, setKey } from "./store";

export class StoreDAO implements StoreDAOModel {
    constructor(private readonly store: Store) {}

    startQuiz(quizId: string) {
        this.store.dispatch(startQuiz({ quizId }));
    }

    answerQuestion(quizId: string, questionId: string, options: string[]) {
        this.store.dispatch(answerQuestion({ quizId, questionId, options }));
    }

    finishQuiz(quizId: string) {
        this.store.dispatch(finishQuiz({ quizId }));
    }

    setKey(quizId: string, key: string, value: any) {
        this.store.dispatch(setKey({ quizId, key, value }));
    }
}

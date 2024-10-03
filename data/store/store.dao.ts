import { Store } from "@reduxjs/toolkit";
import { StoreDAO as StoreDAOModel } from "@/domain/model/store.dao";
import { answerQuestion, finishQuiz, startQuiz } from "./store";

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
}

import { Store } from "@reduxjs/toolkit";

import { ValidValue } from "@/domain/model/option.dto";
import { StoreDAO as StoreDAOModel } from "@/domain/model/store.dao";

import { answerQuestion, finishQuiz, setKey, startQuiz } from "./store";

export class StoreDAO implements StoreDAOModel {
  constructor(private readonly store: Store) {}

  startQuiz(quizId: string) {
    this.store.dispatch(startQuiz({ quizId }));
  }

  answerQuestion(quizId: string, questionId: string, value: ValidValue) {
    this.store.dispatch(answerQuestion({ quizId, questionId, value }));
  }

  finishQuiz(quizId: string) {
    this.store.dispatch(finishQuiz({ quizId }));
  }

  setKey(quizId: string, key: string, value: ValidValue) {
    this.store.dispatch(setKey({ quizId, key, value }));
  }
}

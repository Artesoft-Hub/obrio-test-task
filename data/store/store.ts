import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import { QuizzesState } from "@/domain/model/store.dao";

import { rootReducer } from "./reducers";

const initialState: QuizzesState = {
  results: {},
};

const quizSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: rootReducer,
});

export const { startQuiz, finishQuiz, answerQuestion, setKey } =
  quizSlice.actions;

export const store = configureStore({
  reducer: {
    quizzes: quizSlice.reducer,
  },
});

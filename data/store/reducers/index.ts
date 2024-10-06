import {
    Key,
    QuestionID,
    QuizID,
    QuizzesState,
    Value,
} from "@/domain/model/store.dao";
import { PayloadAction } from "@reduxjs/toolkit";

export const rootReducer = {
    startQuiz: (state: QuizzesState, action: PayloadAction<QuizID>) => {
        const { quizId } = action.payload;
        state.results[quizId] = { finished: false, answers: [], keys: {} };
    },
    finishQuiz: (state: QuizzesState, action: PayloadAction<QuizID>) => {
        const { quizId } = action.payload;
        state.results[quizId].finished = true;
    },
    resetQuiz: (state: QuizzesState, action: PayloadAction<QuizID>) => {
        const { quizId } = action.payload;
        delete state.results[quizId];
    },

    answerQuestion: (
        state: QuizzesState,
        action: PayloadAction<QuizID & QuestionID & Value>
    ) => {
        const { quizId, questionId, value } = action.payload;
        state.results[quizId].answers.push({
            questionId,
            value,
        });
    },
    setKey: (
        state: QuizzesState,
        action: PayloadAction<QuizID & Key & Value>
    ) => {
        const { quizId, key, value } = action.payload;
        state.results[quizId].keys[key] = value;
    },
};

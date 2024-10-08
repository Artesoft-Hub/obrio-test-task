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
    answerQuestion: (
        state: QuizzesState,
        action: PayloadAction<QuizID & QuestionID & Value>
    ) => {
        const { quizId, questionId, value } = action.payload;
        const answers = state.results[quizId].answers;

        // Find the index of the question if it was already answered
        const existingAnswerIndex = answers.findIndex(
            (answer) => answer.questionId === questionId
        );

        if (existingAnswerIndex !== -1) {
            // If the question was already answered, replace it and remove subsequent answers
            answers[existingAnswerIndex] = { questionId, value };
            // Remove all answers after the current one
            state.results[quizId].answers = answers.slice(
                0,
                existingAnswerIndex + 1
            );
        } else {
            // If it's a new answer, just add it to the answers array
            answers.push({ questionId, value });
        }
    },
    setKey: (
        state: QuizzesState,
        action: PayloadAction<QuizID & Key & Value>
    ) => {
        const { quizId, key, value } = action.payload;
        state.results[quizId].keys[key] = value;
    },
};

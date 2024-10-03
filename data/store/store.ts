import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

interface QuizResult {
    finished: boolean;
    answers: {
        questionId: string;
        optionIds: string[];
    }[];
}

interface QuizzesState {
    results: {
        [quizId: string]: QuizResult;
    };
}

export interface RootState {
    quizzes: QuizzesState;
}

const initialState: QuizzesState = {
    results: {},
};

const quizSlice = createSlice({
    name: "quizzes",
    initialState,
    reducers: {
        startQuiz: (state, action) => {
            const { quizId } = action.payload;
            console.log("hello");
            state.results[quizId] = { finished: false, answers: [] };
        },
        finishQuiz: (state, action) => {
            const { quizId } = action.payload;
            state.results[quizId].finished = true;
        },
        resetQuiz: (state, action) => {
            const { quizId } = action.payload;
            delete state.results[quizId];
        },

        answerQuestion: (state, action) => {
            const { quizId, questionId, options } = action.payload;
            state.results[quizId].answers.push({
                questionId,
                optionIds: options,
            });
        },
    },
    extraReducers: (builder) => {
        builder.addCase<any>(HYDRATE, (state, action) => ({
            ...state,
            ...action.payload.quezzes,
        }));
    },
});

export const { startQuiz, finishQuiz, resetQuiz, answerQuestion } =
    quizSlice.actions;
export default quizSlice.reducer;

export const store = configureStore({
    reducer: {
        quizzes: quizSlice.reducer,
    },
});

export const initStore = () => {
    configureStore({
        reducer: {
            quizzes: quizSlice.reducer,
        },
    });

    return store;
};

export const wrapper = createWrapper(initStore);

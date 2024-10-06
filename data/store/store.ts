import { QuizzesState } from "@/domain/model/store.dao";
import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { rootReducer } from "./reducers";

const initialState: QuizzesState = {
    results: {},
};

const quizSlice = createSlice({
    name: "quizzes",
    initialState,
    reducers: rootReducer,
    extraReducers: (builder) => {
        builder.addCase<any>(HYDRATE, (state, action) => ({
            ...state,
            ...action.payload.quezzes,
        }));
    },
});

export const { startQuiz, finishQuiz, resetQuiz, answerQuestion, setKey } =
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

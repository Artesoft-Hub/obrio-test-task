import { configureStore, Store } from "@reduxjs/toolkit";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QuizDTO } from "@/domain/model/quiz.dto";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

export interface RootState {
    quizzes: {
        list: QuizDTO[]; // Stores all quizzes retrieved from the API
        current: string | null; // The ID of the quiz the user is currently passing
        results: { [quizId: string]: QuizResult }; // Stores the result for each quiz the user has passed
        loading: boolean;
        error: string | null;
    };
}

interface QuizResult {
    finished: boolean;
    answers: { [questionId: string]: string }; // Store user answers per question
}

const initialState: any = {
    list: [],
    current: null,
    results: {},
    loading: false,
    error: null,
};

const quizSlice = createSlice({
    name: "quizzes",
    initialState,
    reducers: {
        setAllQuizzes(state, action: PayloadAction<QuizDTO[]>) {
            state.list = action.payload;
        },
        setSelectedQuizId(state, action: PayloadAction<string>) {
            state.current = action.payload;
        },
        setQuizResult(
            state,
            action: PayloadAction<{ quizId: string; result: QuizResult }>
        ) {
            state.results[action.payload.quizId] = action.payload.result;
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
        setError(state, action: PayloadAction<string | null>) {
            state.error = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase<any>(HYDRATE, (state, action) => {
            console.log("ACTION", action);
            return {
                ...state,
                ...action.payload.quezzes,
            };
        });
    },
    // extraReducers: {
    //     __NEXT_REDUX_WRAPPER_HYDRATE__(state: any, action: any) {
    //         console.log("HYDRATE", state, action.payload);
    //         return {
    //             ...state,
    //             ...action.payload.subject,
    //         };
    //     },
    // },
});

export const {
    setAllQuizzes,
    setSelectedQuizId,
    setQuizResult,
    setLoading,
    setError,
} = quizSlice.actions;
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

import { Store } from "@reduxjs/toolkit";
import { StoreDAO as StoreDAOModel } from "@/domain/model/store.dao";
import { DatabaseAdapter } from "@/domain/model/database.adapter";
import {
    setAllQuizzes,
    setSelectedQuizId,
    setError,
    setLoading,
} from "./store";
import { QuizDTO } from "@/domain/model/quiz.dto";

export class StoreDAO implements StoreDAOModel {
    constructor(
        private readonly store: Store,
        private readonly adapter: DatabaseAdapter
    ) {}

    async setQuizzes() {
        this.store.dispatch(setLoading(true));

        try {
            const quizzes = await this.adapter.getAllQuizes();
            console.log(quizzes);
            this.store.dispatch(setAllQuizzes(quizzes));
        } catch (error: any) {
            this.store.dispatch(setError(error));
        } finally {
            this.store.dispatch(setLoading(false));
        }
    }

    setCurrentQuiz(id: string) {
        this.store.dispatch(setLoading(true));

        try {
            this.store.dispatch(setSelectedQuizId(id));
        } catch (error: any) {
            this.store.dispatch(setError(error));
        } finally {
            this.store.dispatch(setLoading(false));
        }
    }

    getQuizzes(): QuizDTO[] {
        return this.store.getState().quizzes.list;
    }

    getCurrentQuiz(): string {
        return this.store.getState().quizzes.current;
    }
}

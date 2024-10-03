import { QuizDTO } from "./quiz.dto";

export interface StoreDAO {
    setQuizzes: () => void;
    getQuizzes: () => QuizDTO[];
    setCurrentQuiz: (id: string) => void;
    getCurrentQuiz: () => string;
}

export interface StoreDAO {
    startQuiz: (id: string) => void;
    finishQuiz: (id: string) => void;
    answerQuestion: (quizId: string, questionId: string, values: any[]) => void;
    setKey: (quizId: string, key: string, value: unknown) => void;
}

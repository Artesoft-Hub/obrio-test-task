import { DatabaseAdapter } from "@/domain/model/database.adapter";
import { QuestionType } from "@/domain/model/question.dto";
import { QuizDTO } from "@/domain/model/quiz.dto";

export class NextApiAdapter implements DatabaseAdapter {
    private readonly apiUrl = "";

    async getAllQuizes(): Promise<QuizDTO[]> {
        const response = await fetch("http://localhost:3000/api/quizzes");
        const data = await response.json();

        return data.quizzes;
    }

    async getQuizByID(id: string): Promise<QuizDTO> {
        const response = await fetch(`http://localhost:3000/api/quizzes/${id}`);
        const data = await response.json();

        return data.quiz;
    }
}

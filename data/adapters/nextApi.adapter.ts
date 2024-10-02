import { DatabaseAdapter } from "@/domain/model/database.adapter";
import { QuizDTO } from "@/domain/model/quiz.dto";

export class NextApiAdapter implements DatabaseAdapter {
    private readonly apiUrl = "";

    async getAllQuizes(): Promise<QuizDTO[]> {
        return [];
    }

    async getQuizByID(id: string): Promise<QuizDTO[]> {
        return [];
    }
}

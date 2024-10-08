import { mockData } from "@/mocks/quizzes";

import { DatabaseAdapter } from "@/domain/model/database.adapter";
import { QuizDTO } from "@/domain/model/quiz.dto";

export class SomeApiAdapter implements DatabaseAdapter {
  async getAllQuizes(): Promise<QuizDTO[]> {
    return mockData; // if this was real api, there would be a mapper in ./someAPi.dto.ts that would transform Response to DTO
  }

  async getQuizByID(id: string): Promise<QuizDTO> {
    const data = mockData.find((dto) => dto.id === id)!;
    return data;
  }
}

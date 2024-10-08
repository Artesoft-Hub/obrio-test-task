import { AnswerDTO, QuizResultDTO } from "../model/result.dto";
import { QuizResultQuery } from "../model/result.query";

export class QuizResult implements QuizResultQuery {
  constructor(private readonly dto: QuizResultDTO) {}

  getLastAnswer(): AnswerDTO | undefined {
    return this.dto.answers.at(-1);
  }

  getAnswers(): AnswerDTO[] {
    return this.dto.answers;
  }
}

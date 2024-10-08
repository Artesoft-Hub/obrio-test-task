import { OptionDTO, ValidValue } from "../model/option.dto";
import { OptionQuery } from "../model/option.query";
import { QuizResultDTO } from "../model/result.dto";

export class Option implements OptionQuery {
  constructor(
    private readonly dto: OptionDTO,
    private readonly questionId: string
  ) {}

  getId(): string {
    return this.dto.id;
  }

  getTitle(): string {
    return this.dto.title;
  }

  getValue(): ValidValue | undefined {
    return this.dto.value;
  }

  isLast(): boolean {
    return !this.dto.nextQuestion;
  }

  getNextQuestionId(): string | null {
    return this.dto.nextQuestion;
  }

  isSelected(result: QuizResultDTO | undefined): boolean {
    if (!result) {
      return false;
    }

    return result.answers.some(
      (answer) =>
        answer.value === this.dto.value && answer.questionId === this.questionId
    );
  }
}

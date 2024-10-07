import { OptionDTO, ValidValue } from "../model/option.dto";
import { OptionQuery } from "../model/option.query";

export class Option implements OptionQuery {
    constructor(private readonly dto: OptionDTO) {}

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
}

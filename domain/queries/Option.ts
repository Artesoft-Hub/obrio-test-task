import { OptionDTO } from "../model/option.dto";
import { OptionQuery } from "../model/option.query";

export class Option implements OptionQuery {
    constructor(private readonly dto: OptionDTO) {}

    getId(): string {
        return this.dto.id;
    }

    getTitle(): string {
        return this.dto.title;
    }

    getValue(): unknown {
        return this.dto.value;
    }

    isLast(): boolean {
        return !this.dto.nextQuestion;
    }

    getNextQuestionId(): string | null {
        return this.dto.nextQuestion;
    }
}

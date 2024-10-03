import { OptionQuery } from "../model/option.query";
import { QuestionDTO, QuestionType } from "../model/question.dto";
import { QuestionQuery } from "../model/question.query";
import { Option } from "./Option";

export class Question implements QuestionQuery {
    constructor(private readonly dto: QuestionDTO) {}

    getId(): string {
        return this.dto.id;
    }

    getTitle(): string {
        return this.dto.title;
    }

    getType(): QuestionType {
        return this.dto.type;
    }

    getOptions(): OptionQuery[] {
        return this.dto.options.map((dto) => new Option(dto));
    }
}

import { OptionQuery } from "../model/option.query";
import { QuestionDTO, QuestionType } from "../model/question.dto";
import { QuestionQuery } from "../model/question.query";
import { Option } from "./Option";

export class Question implements QuestionQuery {
    constructor(private readonly dto: QuestionDTO) {}

    getId(): string {
        return this.dto.id;
    }

    getTitle(keys: { [key: string]: unknown }): string {
        if (!keys) {
            return this.dto.title;
        }

        return this.mapKeysToTitle(this.dto.title, keys);
    }

    getDescription(): string | undefined {
        return this.dto.description;
    }

    getType(): QuestionType {
        return this.dto.type;
    }

    getOptions(): OptionQuery[] {
        return this.dto.options.map((dto) => new Option(dto));
    }

    getStoredKey(): string | undefined {
        return this.dto.store_key;
    }

    private mapKeysToTitle(
        title: string,
        keys: { [key: string]: any }
    ): string {
        return (
            title
                // Replace placeholders keys like {{key}}
                .replace(/{{(.*?)}}/g, (_, key) => keys[key.trim()] || "")
                // Handle conditional logic {text (condition)}
                .replace(/\{(.*?)\((.*?)\)\}/g, (_, text, condition) =>
                    keys[condition.trim()] ? text : ""
                )
        );
    }
}

import { OptionQuery } from "./option.query";
import { QuestionType } from "./question.dto";

export interface QuestionQuery {
    getId: () => string;
    getTitle: (keys: { [key: string]: unknown }) => string;
    getDescription: () => string | undefined;
    getType: () => QuestionType;
    getOptions: () => OptionQuery[];
    getStoredKey: () => string | undefined;
    getResult: (value: any) => string;
}

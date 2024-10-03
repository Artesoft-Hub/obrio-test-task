import { OptionQuery } from "./option.query";
import { QuestionType } from "./question.dto";

export interface QuestionQuery {
    getId: () => string;
    getTitle: (keys: { [key: string]: any }) => string;
    getType: () => QuestionType;
    getOptions: () => OptionQuery[];
    getStoredKey: () => string | undefined;
}

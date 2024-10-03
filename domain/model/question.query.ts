import { OptionQuery } from "./option.query";
import { QuestionType } from "./question.dto";

export interface QuestionQuery {
    getId: () => string;
    getTitle: () => string;
    getType: () => QuestionType;
    getOptions: () => OptionQuery[];
}

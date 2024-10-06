import { ValidValue } from "./option.dto";

export interface OptionQuery {
    getId: () => string;
    getTitle: () => string;
    getValue: () => ValidValue | undefined;
    getNextQuestionId: () => string | null;
    isLast: () => boolean;
}

import { ValidValue } from "./option.dto";
import { QuizResultDTO } from "./result.dto";

export interface OptionQuery {
    getId: () => string;
    getTitle: () => string;
    getValue: () => ValidValue | undefined;
    getNextQuestionId: () => string | null;
    isLast: () => boolean;
    isSelected: (result: QuizResultDTO | undefined) => boolean;
}

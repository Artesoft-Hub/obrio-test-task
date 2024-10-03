export interface OptionQuery {
    getId: () => string;
    getTitle: () => string;
    getValue: () => unknown;
    getNextQuestionId: () => string | null;
    isLast: () => boolean;
}

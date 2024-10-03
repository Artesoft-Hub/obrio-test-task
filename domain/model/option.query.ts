export interface OptionQuery {
    getId: () => string;
    getTitle: () => string;
    getValue: () => any;
    getNextQuestionId: () => string | null;
    isLast: () => boolean;
}

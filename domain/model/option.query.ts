export interface OptionQuery {
    getId: () => string;
    getTitle: () => string;
    getNextQuestionId: () => string | null;
    isLast: () => boolean;
}

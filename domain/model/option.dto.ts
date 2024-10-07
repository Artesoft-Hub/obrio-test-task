export type ValidValue = string | number | boolean;

export interface OptionDTO {
    id: string;
    title: string;
    nextQuestion: string | null;
    value?: ValidValue;
}

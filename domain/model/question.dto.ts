import { OptionDTO } from "./option.dto";

export enum QuestionType {
    Info = "info",
    SingleSelect = "single-choice",
}

export interface QuestionDTO {
    id: string;
    title: string;
    description?: string;
    type: QuestionType;
    options: OptionDTO[];
    store_key?: string;
}

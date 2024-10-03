import { OptionDTO } from "./option.dto";

export enum QuestionType {
    SingleSelect = "single-choice",
}

export interface QuestionDTO {
    id: string;
    title: string;
    type: QuestionType;
    options: OptionDTO[];
    store_key?: string;
}

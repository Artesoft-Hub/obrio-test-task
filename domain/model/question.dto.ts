import { OptionDTO } from "./option.dto";

export enum QuestionType {
    Info = "info",
    TextInput = "text-input",
    OptionSelect = "option-select",
}

export interface QuestionDTO {
    id: string;
    title: string;
    description?: string;
    type: QuestionType;
    options: OptionDTO[];
    store_key?: string;
}

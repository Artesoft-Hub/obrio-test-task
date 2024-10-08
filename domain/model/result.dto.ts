import { ValidValue } from "./option.dto";
import { QuestionID, Value } from "./store.dao";

export interface AnswerDTO extends QuestionID, Value {}

export interface QuizResultDTO {
  finished: boolean;
  keys: {
    [key: string]: ValidValue;
  };
  answers: AnswerDTO[];
}

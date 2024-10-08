import { ValidValue } from "./option.dto";
import { OptionQuery } from "./option.query";
import { QuestionType } from "./question.dto";
import { QuizResultDTO } from "./result.dto";

export interface QuestionQuery {
  getId: () => string;
  getTitle: (keys: { [key: string]: ValidValue } | undefined) => string;
  getDescription: () => string | undefined;
  getType: () => QuestionType;
  getOptions: () => OptionQuery[];
  getStoredKey: () => string | undefined;
  getResult: (value: ValidValue) => string;
  isQuestionAccessible: (quizResult: QuizResultDTO) => boolean;
}

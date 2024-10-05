import { store } from "./store/store";
import { StoreDAO } from "./store/store.dao";

import { startQuiz as startQuizCommand } from "@/domain/commands/startQuiz";
import { finishQuiz as finishQuizCommand } from "@/domain/commands/finishQuiz";
import { answerQuestion as answerQuestionCommand } from "@/domain/commands/answerQuestion";
import { setQuestionKey as setQuestionKeyCommand } from "@/domain/commands/setQuestionKey";

const storeDAO = new StoreDAO(store);

export const startQuiz = startQuizCommand(storeDAO);
export const finishQuiz = finishQuizCommand(storeDAO);
export const answerQuestion = answerQuestionCommand(storeDAO);
export const setQuestionKey = setQuestionKeyCommand(storeDAO);

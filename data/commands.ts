import { answerQuestion as answerQuestionCommand } from "@/domain/commands/answerQuestion";
import { finishQuiz as finishQuizCommand } from "@/domain/commands/finishQuiz";
import { setQuestionKey as setQuestionKeyCommand } from "@/domain/commands/setQuestionKey";
import { startQuiz as startQuizCommand } from "@/domain/commands/startQuiz";

import { store } from "./store/store";
import { StoreDAO } from "./store/store.dao";

const storeDAO = new StoreDAO(store);

export const startQuiz = startQuizCommand(storeDAO);
export const finishQuiz = finishQuizCommand(storeDAO);
export const answerQuestion = answerQuestionCommand(storeDAO);
export const setQuestionKey = setQuestionKeyCommand(storeDAO);

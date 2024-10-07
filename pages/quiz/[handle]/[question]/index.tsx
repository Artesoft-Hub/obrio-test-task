import InfoScreen from "@/ui/InfoScreen";
import SingleSelectQuestion from "@/ui/OptionSelectQuestion";
import TextInputQuestion from "@/ui/TextInputQuestion";
import UnknownScreen from "@/ui/UnknownScreen";
import { SomeApiAdapter } from "@/data/adapters/someApi.adapter";
import { answerQuestion, finishQuiz, setQuestionKey } from "@/data/commands";
import { RootState } from "@/domain/model/store.dao";
import { OptionQuery } from "@/domain/model/option.query";
import { QuestionDTO, QuestionType } from "@/domain/model/question.dto";
import { QuestionQuery } from "@/domain/model/question.query";
import { QuizDTO } from "@/domain/model/quiz.dto";
import { getQuestion } from "@/domain/repositories/getQuestion";
import { getQuiz } from "@/domain/repositories/getQuiz";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ValidValue } from "@/domain/model/option.dto";

type Props = {
    handle: string;
    questionDTO: QuestionDTO;
    quizDTO: QuizDTO;
};

type ScreenProps = {
    keys: { [key: string]: ValidValue };
    question: QuestionQuery;
    submitAnswer: (option: OptionQuery, customValue?: ValidValue) => void;
};

export const getStaticPaths: GetStaticPaths = async () => {
    const adapter = new SomeApiAdapter();
    const quizDTOs = await adapter.getAllQuizes();
    const paths = quizDTOs.flatMap((quiz) =>
        quiz.questions.map((dto) => ({
            params: { handle: quiz.id, question: dto.id },
        }))
    );

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<
    Props,
    { handle: string; question: string }
> = async (context) => {
    const { handle, question } = context.params!;

    const adapter = new SomeApiAdapter();
    const quizDTO = await adapter.getQuizByID(handle);
    const questionDTO = quizDTO.questions.find((dto) => dto.id === question)!;

    return {
        props: { handle, questionDTO, quizDTO },
    };
};

const TYPE_TO_SCREEN = new Map<QuestionType, React.FC<ScreenProps>>([
    [QuestionType.Info, InfoScreen],
    [QuestionType.OptionSelect, SingleSelectQuestion],
    [QuestionType.TextInput, TextInputQuestion],
]);

export default function QuizQuestion({ questionDTO, quizDTO, handle }: Props) {
    const results = useSelector((state: RootState) => state.quizzes.results);
    const router = useRouter();
    const [keys, setKeys] = useState<{ [key: string]: ValidValue }>({});

    const question = getQuestion(questionDTO);
    const quiz = getQuiz(quizDTO);
    const questionID = question.getId();

    const type = question.getType();
    const questionKey = question.getStoredKey();

    const checkIfQuestionAvailable = () => {
        const currentResult = results[handle];

        if (!currentResult) {
            return router.push(`/quiz/${handle}`);
        }

        const isAccessible = quiz.isQuestionAvailable(
            currentResult,
            questionID
        );

        if (!isAccessible) {
            return router.back();
        }

        setKeys(currentResult.keys);
    };

    const Component = TYPE_TO_SCREEN.get(type) ?? UnknownScreen;

    useEffect(() => {
        checkIfQuestionAvailable();
    }, [questionID]);

    const handleSubmit = (
        selectedOption: OptionQuery,
        customValue?: ValidValue
    ) => {
        const answer = customValue ?? selectedOption.getValue();

        answerQuestion(handle, question.getId(), answer);

        if (questionKey && answer) {
            setQuestionKey(handle, questionKey, answer);
        }

        const isLast = selectedOption.isLast();

        if (isLast) {
            finishQuiz(handle);
            return router.push(`/quiz/${handle}/results`);
        }

        const next = selectedOption.getNextQuestionId();

        router.push(`/quiz/${handle}/${next}`);
    };

    return (
        <Component
            question={question}
            keys={keys}
            submitAnswer={handleSubmit}
        />
    );
}

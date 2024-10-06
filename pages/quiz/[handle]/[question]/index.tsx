import InfoScreen from "@/components/InfoScreen";
import SingleSelectQuestion from "@/components/OptionSelectQuestion";
import TextInputQuestion from "@/components/TextInputQuestion";
import UnknownScreen from "@/components/UnknownScreen";
import { NextApiAdapter } from "@/data/adapters/nextApi.adapter";
import { answerQuestion, finishQuiz, setQuestionKey } from "@/data/commands";
import { RootState } from "@/data/store/store";
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

type Props = {
    handle: string;
    questionDTO: QuestionDTO;
    quizDTO: QuizDTO;
};

type ScreenProps = {
    keys: { [key: string]: unknown };
    question: QuestionQuery;
    submitAnswer: (option: OptionQuery, customValue?: unknown) => void;
};

export const getStaticPaths: GetStaticPaths = async () => {
    const adapter = new NextApiAdapter();
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

    const adapter = new NextApiAdapter();
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
    const [keys, setKeys] = useState<{ [key: string]: string | number }>({});

    const question = getQuestion(questionDTO);
    const quiz = getQuiz(quizDTO);
    const questionID = question.getId();

    const type = question.getType();
    const questionKey = question.getStoredKey();

    const Component = TYPE_TO_SCREEN.get(type) ?? UnknownScreen;

    const setup = () => {
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

    useEffect(() => {
        setup();
    }, [questionID]);

    const handleSubmit = (
        selectedOption: OptionQuery,
        customValue?: unknown
    ) => {
        const answer = customValue ?? selectedOption.getValue();

        answerQuestion(handle, question.getId(), answer);

        if (questionKey) {
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

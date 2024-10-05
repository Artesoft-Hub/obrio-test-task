import InfoScreen from "@/components/InfoScreen";
import SingleSelectQuestion from "@/components/OptionSelectQuestion";
import TextInputQuestion from "@/components/TextInputQuestion";
import UnknownScreen from "@/components/UnknownScreen";
import { NextApiAdapter } from "@/data/adapters/nextApi.adapter";
import { RootState, store } from "@/data/store/store";
import { StoreDAO } from "@/data/store/store.dao";
import { OptionQuery } from "@/domain/model/option.query";
import { QuestionDTO, QuestionType } from "@/domain/model/question.dto";
import { QuestionQuery } from "@/domain/model/question.query";
import { Question } from "@/domain/queries/Question";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

type Props = {
    handle: string;
    dto: QuestionDTO;
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
    const quiz = await adapter.getQuizByID(handle);
    const dto = quiz.questions.find(
        (questionDTO) => questionDTO.id === question
    )!;

    return {
        props: { handle, dto },
    };
};

const TYPE_TO_SCREEN = new Map<QuestionType, React.FC<ScreenProps>>([
    [QuestionType.Info, InfoScreen],
    [QuestionType.OptionSelect, SingleSelectQuestion],
    [QuestionType.TextInput, TextInputQuestion],
]);

export default function QuizQuestion({ dto, handle }: Props) {
    const results = useSelector((state: RootState) => state.quizzes.results);
    const router = useRouter();

    const question = new Question(dto);
    const keys = results[handle]?.keys;
    const type = question.getType();
    const questionKey = question.getStoredKey();

    const Component = TYPE_TO_SCREEN.get(type) ?? UnknownScreen;

    const handleSubmit = (
        selectedOption: OptionQuery,
        customValue?: unknown
    ) => {
        const dao = new StoreDAO(store);
        const answer = customValue ?? selectedOption.getValue();

        dao.answerQuestion(handle, question.getId(), answer);

        if (questionKey) {
            dao.setKey(handle, questionKey, answer);
        }

        const isLast = selectedOption.isLast();

        if (isLast) {
            dao.finishQuiz(handle);
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

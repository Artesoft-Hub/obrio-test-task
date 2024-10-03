import { NextApiAdapter } from "@/data/adapters/nextApi.adapter";
import { RootState, store } from "@/data/store/store";
import { StoreDAO } from "@/data/store/store.dao";
import { OptionQuery } from "@/domain/model/option.query";
import { QuestionDTO } from "@/domain/model/question.dto";
import { Question } from "@/domain/queries/Question";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

type Props = {
    handle: string;
    dto: QuestionDTO;
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

export default function QuizQuestion({ dto, handle }: Props) {
    const results = useSelector((state: RootState) => state.quizzes.results);
    const router = useRouter();

    const question = new Question(dto);
    const keys = results[handle]?.keys;
    const title = question.getTitle(keys);
    const type = question.getType();
    const options = question.getOptions();
    const questionKey = question.getStoredKey();

    console.log("keys", keys);
    console.log("questionKey", questionKey);

    const handleAnswerClick = (selectedOption: OptionQuery) => {
        const dao = new StoreDAO(store);
        dao.answerQuestion(handle, question.getId(), [selectedOption.getId()]);

        if (questionKey) {
            dao.setKey(handle, questionKey, selectedOption.getValue());
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
        <div>
            <h2>{title}</h2>
            <p>Question type: {type}</p>
            <ul>
                {options.map((option: OptionQuery) => (
                    <li key={option.getId()}>
                        <button onClick={() => handleAnswerClick(option)}>
                            {option.getTitle()}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

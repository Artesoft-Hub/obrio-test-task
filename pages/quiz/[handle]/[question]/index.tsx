import { NextApiAdapter } from "@/data/adapters/nextApi.adapter";
import { OptionQuery } from "@/domain/model/option.query";
import { QuestionDTO } from "@/domain/model/question.dto";
import { Question } from "@/domain/queries/Question";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

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

    console.log("PATHS !!!", paths);

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<
    Props,
    { handle: string; question: string }
> = async (context) => {
    const { handle, question } = context.params!;
    console.log("context.params", handle, question);
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
    const question = new Question(dto);
    const title = question.getTitle();
    const type = question.getType();
    const options = question.getOptions();
    const router = useRouter();

    const handleAnswerClick = (selectedOption: OptionQuery) => {
        const isLast = selectedOption.isLast();
        console.log("selectedOption", selectedOption);

        if (isLast) {
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

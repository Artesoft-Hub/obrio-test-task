import { QuizCard } from "@/components/QuizCard";
import { GetStaticProps } from "next";
import { QuizDTO } from "@/domain/model/quiz.dto";
import { wrapper } from "@/data/store/store";
import { NextApiAdapter } from "@/data/adapters/nextApi.adapter";
import { Quiz } from "@/domain/queries/Quiz";

type Props = {
    quizDTOs: QuizDTO[];
};

export const getStaticProps: GetStaticProps<Props> = wrapper.getStaticProps(
    () => async () => {
        const adapter = new NextApiAdapter();
        const quizDTOs = await adapter.getAllQuizes();

        return { props: { quizDTOs } };
    }
);

export default function Home({ quizDTOs }: Props) {
    console.log(quizDTOs);
    const quizzes = quizDTOs?.map((dto) => new Quiz(dto));

    return (
        <>
            <h1>Take a quiz</h1>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: 20,
                }}
            >
                {quizzes?.map((quiz: Quiz) => (
                    <QuizCard key={quiz.getId()} quiz={quiz} />
                ))}
            </div>
        </>
    );
}

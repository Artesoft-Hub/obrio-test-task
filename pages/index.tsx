import { QuizCard } from "@/ui/QuizCard";
import { GetStaticProps } from "next";
import { QuizDTO } from "@/domain/model/quiz.dto";
import { SomeApiAdapter } from "@/data/adapters/someApi.adapter";
import { Quiz } from "@/domain/queries/Quiz";
import { getQuiz } from "@/domain/repositories/getQuiz";

type Props = {
    quizDTOs: QuizDTO[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
    const adapter = new SomeApiAdapter();
    const quizDTOs = await adapter.getAllQuizes();

    return { props: { quizDTOs } };
};

export default function Home({ quizDTOs }: Props) {
    const quizzes = quizDTOs?.map(getQuiz);

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

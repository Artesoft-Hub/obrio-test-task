// import { QuizCard } from "@/ui/QuizCard";
import { GetStaticProps } from "next";
import { QuizDTO } from "@/domain/model/quiz.dto";
import { SomeApiAdapter } from "@/data/adapters/someApi.adapter";
import { getQuiz } from "@/domain/repositories/getQuiz";
import QuizCardList from "@/ui/organizms/QuizCardList";
import Heading from "@/ui/atoms/Heading";
import { Space } from "@/ui/atoms/Space";

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
            <Space mt={24} mb={16}>
                <Heading h={1}>Take a quiz</Heading>
            </Space>
            <QuizCardList quizzes={quizzes} />
        </>
    );
}

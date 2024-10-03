import { AddQuiz } from "@/components/AddQuiz";
import { QuizCard } from "@/components/QuizCard";
import { getAllQuizes, setAllQuizes, setCurrent } from "@/data/commands";
import { GetStaticProps } from "next";
import { QuizDTO } from "@/domain/model/quiz.dto";
import { useSelector } from "react-redux";
import { RootState, wrapper } from "@/data/store/store";
import { StoreDAO } from "@/data/store/store.dao";
import { NextApiAdapter } from "@/data/adapters/nextApi.adapter";

type Props = {
    quizzes: QuizDTO[];
};

export const getStaticProps: GetStaticProps<Props> = wrapper.getStaticProps(
    (store) => async () => {
        const adapter = new NextApiAdapter();
        const storeDAO = new StoreDAO(store, adapter);

        await storeDAO.setQuizzes();

        // await setQuizList(storeDAO)();
        // const quizzes = getQuizList(storeDAO)();
        const quizzes = storeDAO.getQuizzes();

        setCurrent("testishe");

        return { props: { quizzes } };
    }
);

export default function Home({ quizzes }: Props) {
    const current = useSelector((state: RootState) => state.quizzes.current);
    console.log("CURRENT", current)
    const handleClick = () => {
        setCurrent("test-1");
    };

    return (
        <>
            <h1>Take a quiz</h1>
            Current state: {current}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: 20,
                }}
            >
                <AddQuiz />
                <button onClick={handleClick}>Test send command</button>
                {quizzes?.map((quiz: any) => (
                    <QuizCard key={quiz.id} {...quiz} />
                ))}
            </div>
        </>
    );
}

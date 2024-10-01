import { GetStaticProps } from "next";
import { AddQuiz } from "@/components/AddQuiz";
import { QuizCard } from "@/components/QuizCard";

type Props = {
    quizes: string[];
};

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            quizes: [
                {
                    id: "test-1",
                    title: "Personality Quiz",
                    description: "Find out what kind of learner you are.",
                    questions: [
                        {
                            id: "q1",
                            text: "What do you enjoy the most?",
                            type: "single-choice",
                            options: [
                                {
                                    id: "a1",
                                    text: "Reading books",
                                    nextQuestion: "q2",
                                    storeVariable: "reading_enjoyment",
                                },
                                {
                                    id: "a2",
                                    text: "Watching videos",
                                    nextQuestion: "q3",
                                    storeVariable: "watching_enjoyment",
                                },
                                {
                                    id: "a3",
                                    text: "Hands-on activities",
                                    nextQuestion: "q4",
                                    storeVariable: "hands_on_enjoyment",
                                },
                            ],
                        },
                        {
                            id: "q2",
                            text: "What type of books do you prefer?",
                            type: "single-choice",
                            options: [
                                {
                                    id: "a4",
                                    text: "Fiction",
                                    nextQuestion: "q5",
                                    storeVariable: "fiction_preference",
                                },
                                {
                                    id: "a5",
                                    text: "Non-fiction",
                                    nextQuestion: "q5",
                                    storeVariable: "non_fiction_preference",
                                },
                            ],
                        },
                        {
                            id: "q3",
                            text: "What type of videos do you enjoy?",
                            type: "single-choice",
                            options: [
                                {
                                    id: "a6",
                                    text: "Documentaries",
                                    nextQuestion: "q5",
                                    storeVariable: "documentary_preference",
                                },
                                {
                                    id: "a7",
                                    text: "Entertainment",
                                    nextQuestion: "q5",
                                    storeVariable: "entertainment_preference",
                                },
                            ],
                        },
                        {
                            id: "q4",
                            text: "What kind of hands-on activities do you prefer?",
                            type: "single-choice",
                            options: [
                                {
                                    id: "a8",
                                    text: "Crafting",
                                    nextQuestion: "q5",
                                    storeVariable: "craft_preference",
                                },
                                {
                                    id: "a9",
                                    text: "Building",
                                    nextQuestion: "q5",
                                    storeVariable: "building_preference",
                                },
                            ],
                        },
                        {
                            id: "q5",
                            text: "How do you prefer to learn? Previously you selected {{craft_preference}}",
                            type: "single-choice",
                            options: [
                                {
                                    id: "a10",
                                    text: "By reading",
                                    result: "You're a visual learner",
                                    storeVariable: "reading_preference",
                                },
                                {
                                    id: "a11",
                                    text: "By watching videos",
                                    result: "You're an auditory learner",
                                    storeVariable: "video_preference",
                                },
                                {
                                    id: "a12",
                                    text: "By doing",
                                    result: "You're a kinesthetic learner",
                                    storeVariable: "doing_preference",
                                },
                            ],
                        },
                    ],
                },
                {
                    id: "test-2",
                    title: "second quiz",
                    description: "Testing quizes",
                },
            ],
        },
    };
};

export default function Home({ quizes }: Props) {
    return (
        <>
            <h1>Take a quiz</h1>
            <AddQuiz />
            {quizes.map((quiz: any) => (
                <QuizCard key={quiz.id} {...quiz} />
            ))}
        </>
    );
}

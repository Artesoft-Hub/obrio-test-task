import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const quizData: any = {
    title: "Personality Quiz",
    questions: {
        q1: {
            text: "What do you enjoy the most?",
            options: [
                { id: "a1", text: "Reading books", nextQuestion: "q2" },
                { id: "a2", text: "Watching videos", nextQuestion: "q3" },
                {
                    id: "a3",
                    text: "Hands-on activities",
                    nextQuestion: "q4",
                },
            ],
        },
        q2: {
            text: "What type of books do you prefer?",
            options: [
                { id: "a4", text: "Fiction", nextQuestion: "q5" },
                { id: "a5", text: "Non-fiction", nextQuestion: "q5" },
            ],
        },
    },
};

export default function QuizQuestion() {
    const router = useRouter();
    const { handle, question } = router.query;

    const [questionData, setQuestionData] = useState<any>(null);

    useEffect(() => {
        console.log(handle, question);

        if (handle && question) {
            const questionA = quizData.questions[question as string];
            setQuestionData(questionA);
        }
    }, [handle, question]);

    if (!questionData) {
        return <div>Loading...</div>;
    }

    const handleAnswerClick = (nextQuestion: string) => {
        router.push(`/quiz/${handle}/${nextQuestion}`);
    };

    return (
        <div>
            <h1>{questionData.text}</h1>
            <ul>
                {questionData.options.map((option: any) => (
                    <li key={option.id}>
                        <button
                            onClick={() =>
                                handleAnswerClick(option.nextQuestion)
                            }
                        >
                            {option.text}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

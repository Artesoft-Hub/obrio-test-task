import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const quizData: any = {
    title: "Personality Quiz",
    questions: {
        q1: {
            text: "What do you enjoy the most?",
            options: [
                { id: "a1", text: "Reading books", next: "q2" },
                { id: "a2", text: "Watching videos", next: "q3" },
                {
                    id: "a3",
                    text: "Hands-on activities",
                    next: "q4",
                },
            ],
        },
        q2: {
            text: "What type of books do you prefer?",
            options: [
                { id: "a4", text: "Fiction", next: "q5" },
                { id: "a5", text: "Non-fiction", next: "q5" },
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

    const handleAnswerClick = (next: string) => {
        router.push(`/quiz/${handle}/${next}`);
    };

    return (
        <div>
            <h1>{questionData.text}</h1>
            <ul>
                {questionData.options.map((option: any) => (
                    <li key={option.id}>
                        <button
                            onClick={() =>
                                handleAnswerClick(option.next)
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

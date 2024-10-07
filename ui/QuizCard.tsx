import { Quiz } from "@/domain/queries/Quiz";
import Link from "next/link";
import React from "react";

type Props = {
    quiz: Quiz;
};

export const QuizCard = ({ quiz }: Props) => {
    const id = quiz.getId();
    const title = quiz.getTitle();
    const description = quiz.getDescription();

    return (
        <Link href={`quiz/${id}`} style={{ textDecoration: "none" }}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    padding: "8px 16px",
                    border: "1px solid",
                }}
            >
                <h3 style={{ margin: 0 }}>{title}</h3>
                <p style={{ opacity: 0.7, margin: 0 }}>{description}</p>
            </div>
        </Link>
    );
};

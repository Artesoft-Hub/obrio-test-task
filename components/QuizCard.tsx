import Link from "next/link";
import React from "react";

type Props = {
    id: string;
    title: string;
    description: string;
};

export const QuizCard = ({ id, title, description }: Props) => {
    return (
        <Link href={`quiz/${id}`}>
            {title} {description}
        </Link>
    );
};

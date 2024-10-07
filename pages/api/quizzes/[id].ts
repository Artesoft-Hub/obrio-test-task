import { QuizDTO } from "@/domain/model/quiz.dto";
import { mockData } from "@/mocks/quizzes";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    quiz?: QuizDTO;
    message?: string;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { id } = req.query;
    const data = mockData.find((dto) => dto.id === id);

    if (!data) {
        return res.status(404).json({ message: "Quiz not found !" });
    }

    res.status(200).json({
        quiz: data,
    });
}

import { QuizDTO } from "@/domain/model/quiz.dto";
import { mockData } from "@/mocks/quizzes";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    quizzes: QuizDTO[];
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json({
        quizzes: mockData,
    });
}

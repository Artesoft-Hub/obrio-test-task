import React from "react";
import Card from "../atoms/Card";
import Heading from "../atoms/Heading";
import Typography from "../atoms/Typography";
import { QuizQuery } from "@/domain/model/quiz.query";
import { Space } from "../atoms/Space";
import { Divider } from "../atoms/Divider";
import { Button } from "../atoms/Button";
import Link from "next/link";
import QuizInfo from "../molecules/QuizInfo";
import { useMediaQuery } from "@/hooks/useMediaQuery";

type Props = {
    quiz: QuizQuery;
};

const QuizCard = ({ quiz }: Props) => {
    const isMobile = useMediaQuery();
    const width = isMobile ? "fullWidth" : "content";

    return (
        <Card>
            <QuizInfo
                title={quiz.getTitle()}
                description={quiz.getDescription()}
            />
            <Space mt="auto" mb={8}>
                <Divider />
            </Space>
            <Link href={`quiz/${quiz.getId()}`}>
                <Button width={width}>View details</Button>
            </Link>
        </Card>
    );
};

export default QuizCard;

import Link from "next/link";
import React from "react";

import { QuizQuery } from "@/domain/model/quiz.query";

import { useMediaQuery } from "@/hooks/useMediaQuery";

import { Button } from "../atoms/Button";
import Card from "../atoms/Card";
import { Divider } from "../atoms/Divider";
import { Space } from "../atoms/Space";
import QuizInfo from "../molecules/QuizInfo";

type Props = {
  quiz: QuizQuery;
};

const QuizCard = ({ quiz }: Props) => {
  const isMobile = useMediaQuery();
  const width = isMobile ? "fullWidth" : "content";

  return (
    <Card>
      <QuizInfo title={quiz.getTitle()} description={quiz.getDescription()} />
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

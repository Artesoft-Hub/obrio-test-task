import React from "react";

import Heading from "../atoms/Heading";
import { Space } from "../atoms/Space";
import Typography from "../atoms/Typography";

type Props = {
  title: string;
  description: string;
};

const QuizInfo = ({ title, description }: Props) => {
  return (
    <>
      <Space mb={8}>
        <Heading h={2}>{title}</Heading>
      </Space>
      <Typography>{description}</Typography>
    </>
  );
};

export default QuizInfo;

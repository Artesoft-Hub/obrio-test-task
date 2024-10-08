import React from "react";

import { useMediaQuery } from "@/hooks/useMediaQuery";

import Heading from "../atoms/Heading";
import { Space } from "../atoms/Space";

type Props = {
  title: string;
};

const QuestionTitle = ({ title }: Props) => {
  const isMobile = useMediaQuery();
  const margin = isMobile ? 20 : 40;

  return (
    <Space mt={margin}>
      <Heading h={3}>{title}</Heading>
    </Space>
  );
};

export default QuestionTitle;

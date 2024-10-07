import React from "react";
import { ValidValue } from "@/domain/model/option.dto";
import { OptionQuery } from "@/domain/model/option.query";
import { QuestionQuery } from "@/domain/model/question.query";
import Flex, { Gap } from "@/ui/atoms/Flex";
import { Space } from "@/ui/atoms/Space";
import Heading from "@/ui/atoms/Heading";
import QuizOptions from "../QuizOptions";
import { styled } from "styled-components";
import { QuizResultDTO } from "@/domain/model/result.dto";

type Props = {
    result: QuizResultDTO | undefined;
    question: QuestionQuery;
    submitAnswer: (option: OptionQuery, customValue?: ValidValue) => void;
};

const Container = styled(Flex)`
    max-width: 400px;
    margin: 0 auto;
`;

const OptionSelect = ({ question, submitAnswer, result }: Props) => {
    const title = question.getTitle(result?.keys);
    const options = question.getOptions();

    return (
        <Container alignitems="center" direction="column" gap={Gap.Bigger}>
            <Space mt={40}>
                <Heading h={3}>{title}</Heading>
            </Space>
            <QuizOptions
                options={options}
                submitAnswer={submitAnswer}
                result={result}
            />
        </Container>
    );
};

export default OptionSelect;

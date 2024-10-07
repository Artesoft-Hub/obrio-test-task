import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { ValidValue } from "@/domain/model/option.dto";
import { OptionQuery } from "@/domain/model/option.query";
import { QuestionQuery } from "@/domain/model/question.query";
import { QuizResultDTO } from "@/domain/model/result.dto";
import Flex, { Gap } from "@/ui/atoms/Flex";
import Heading from "@/ui/atoms/Heading";
import { Space } from "@/ui/atoms/Space";
import { Button } from "@/ui/atoms/Button";
import Typography from "@/ui/atoms/Typography";
import { InfoGlobalStyle } from "@/ui/atoms/InfoGlobalStyle";

type Props = {
    result: QuizResultDTO | undefined;
    question: QuestionQuery;
    submitAnswer: (option: OptionQuery, customValue?: ValidValue) => void;
};

const Container = styled(Flex)`
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
`;

const Info = ({ question, submitAnswer, result }: Props) => {
    const title = question.getTitle(result?.keys);
    const description = question.getDescription();
    const options = question.getOptions();

    return (
        <>
            <InfoGlobalStyle />
            <Container alignitems="center" direction="column" gap={Gap.Bigger}>
                <Space mt={40}>
                    <Heading h={3}>{title}</Heading>
                </Space>
                <Typography>{description}</Typography>
                <Flex gap={Gap.Medium}>
                    {options.map((option: OptionQuery) => (
                        <Button onClick={() => submitAnswer(option)}>
                            {option.getTitle()}
                        </Button>
                    ))}
                </Flex>
            </Container>
        </>
    );
};

export default Info;

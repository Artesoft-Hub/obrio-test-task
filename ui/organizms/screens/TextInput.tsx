import React, { useState } from "react";
import styled from "styled-components";
import { ValidValue } from "@/domain/model/option.dto";
import { OptionQuery } from "@/domain/model/option.query";
import { QuestionQuery } from "@/domain/model/question.query";
import { QuizResultDTO } from "@/domain/model/result.dto";
import Flex, { Gap } from "@/ui/atoms/Flex";
import Heading from "@/ui/atoms/Heading";
import { Space } from "@/ui/atoms/Space";
import { Button } from "@/ui/atoms/Button";
import { Input } from "@/ui/atoms/Input";

type Props = {
    result: QuizResultDTO | undefined;
    question: QuestionQuery;
    submitAnswer: (option: OptionQuery, customValue?: ValidValue) => void;
};

const Container = styled(Flex)`
    max-width: 250px;
    margin: 0 auto;
`;

const TextInput = ({ question, submitAnswer, result }: Props) => {
    const [value, setValue] = useState("");
    const title = question.getTitle(result?.keys);
    const options = question.getOptions();

    const handleSubmit = (option: OptionQuery) => {
        submitAnswer(option, value);
    };

    return (
        <Container alignitems="center" direction="column" gap={Gap.Bigger}>
            <Space mt={40}>
                <Heading h={3}>{title}</Heading>
            </Space>
            <Input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <Flex gap={Gap.Medium}>
                {options.map((option: OptionQuery) => (
                    <Button onClick={() => handleSubmit(option)}>
                        {option.getTitle()}
                    </Button>
                ))}
            </Flex>
        </Container>
    );
};

export default TextInput;

import { OptionQuery } from "@/domain/model/option.query";
import React from "react";
import Flex, { Gap } from "../atoms/Flex";
import OptionTab from "../molecules/OptionTab";
import { QuizResultDTO } from "@/domain/model/result.dto";

type Props = {
    options: OptionQuery[];
    submitAnswer: (option: OptionQuery) => void;
    result: QuizResultDTO | undefined;
};

const QuizOptions = ({ options, submitAnswer, result }: Props) => {
    return (
        <Flex direction="column" gap={Gap.SemiBig} isFullWidth={true}>
            {options.map((option: OptionQuery) => (
                <OptionTab
                    key={option.getId()}
                    isSelected={option.isSelected(result)}
                    title={option.getTitle()}
                    onClick={() => submitAnswer(option)}
                />
            ))}
        </Flex>
    );
};

export default QuizOptions;

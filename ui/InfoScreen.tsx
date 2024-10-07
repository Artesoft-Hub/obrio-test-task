import { ValidValue } from "@/domain/model/option.dto";
import { OptionQuery } from "@/domain/model/option.query";
import { QuestionQuery } from "@/domain/model/question.query";
import { QuizResultDTO } from "@/domain/model/result.dto";
import React from "react";

type Props = {
    result: QuizResultDTO | undefined;
    question: QuestionQuery;
    submitAnswer: (option: OptionQuery, customValue?: ValidValue) => void;
};

const InfoScreen = ({ question, result, submitAnswer }: Props) => {
    const title = question.getTitle(result?.keys);
    const description = question.getDescription();
    const options = question.getOptions();

    return (
        <div>
            <h2>{title}</h2>
            <p>Hello from info screen</p>
            <p>{description}</p>
            <ul>
                {options.map((option: OptionQuery) => (
                    <li key={option.getId()}>
                        <button onClick={() => submitAnswer(option)}>
                            {option.getTitle()}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InfoScreen;

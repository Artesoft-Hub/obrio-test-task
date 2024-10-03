import { OptionQuery } from "@/domain/model/option.query";
import { QuestionQuery } from "@/domain/model/question.query";
import React from "react";

type Props = {
    keys: { [key: string]: any };
    question: QuestionQuery;
    submitAnswer: (options: OptionQuery) => void;
};

const InfoScreen = ({ question, keys, submitAnswer }: Props) => {
    const title = question.getTitle(keys);
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

import { ValidValue } from "@/domain/model/option.dto";
import { OptionQuery } from "@/domain/model/option.query";
import { QuestionQuery } from "@/domain/model/question.query";
import React from "react";

type Props = {
    keys: { [key: string]: ValidValue };
    question: QuestionQuery;
    submitAnswer: (option: OptionQuery, customValue?: ValidValue) => void;
};

const SingleSelectQuestion = ({ question, keys, submitAnswer }: Props) => {
    const title = question.getTitle(keys);
    const options = question.getOptions();

    return (
        <div>
            <h2>{title}</h2>
            <p>Hello from single select</p>
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

export default SingleSelectQuestion;

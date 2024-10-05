import { OptionQuery } from "@/domain/model/option.query";
import { QuestionQuery } from "@/domain/model/question.query";
import React from "react";

type Props = {
    keys: { [key: string]: unknown };
    question: QuestionQuery;
    submitAnswer: (option: OptionQuery, customValue?: unknown) => void;
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

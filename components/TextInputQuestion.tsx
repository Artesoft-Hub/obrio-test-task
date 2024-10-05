import { OptionQuery } from "@/domain/model/option.query";
import { QuestionQuery } from "@/domain/model/question.query";
import React, { useState } from "react";

type Props = {
    keys: { [key: string]: unknown };
    question: QuestionQuery;
    submitAnswer: (option: OptionQuery, customValue?: unknown) => void;
};

const TextInputQuestion = ({ question, keys, submitAnswer }: Props) => {
    const [value, setValue] = useState("");
    const title = question.getTitle(keys);
    const options = question.getOptions();

    const handleSubmit = (option: OptionQuery) => {
        submitAnswer(option, value);
    };

    return (
        <div>
            <h2>{title}</h2>
            <p>Hello from text input</p>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <ul>
                {options.map((option: OptionQuery) => (
                    <li key={option.getId()}>
                        <button onClick={() => handleSubmit(option)}>
                            {option.getTitle()}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TextInputQuestion;

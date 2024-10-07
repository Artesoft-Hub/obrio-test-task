import { ValidValue } from "@/domain/model/option.dto";
import { OptionQuery } from "@/domain/model/option.query";
import { QuestionQuery } from "@/domain/model/question.query";
import { QuizResultDTO } from "@/domain/model/result.dto";
import React, { useState } from "react";

type Props = {
    result: QuizResultDTO | undefined;
    question: QuestionQuery;
    submitAnswer: (option: OptionQuery, customValue?: ValidValue) => void;
};

const TextInputQuestion = ({ question, result, submitAnswer }: Props) => {
    const [value, setValue] = useState("");
    const title = question.getTitle(result?.keys);
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

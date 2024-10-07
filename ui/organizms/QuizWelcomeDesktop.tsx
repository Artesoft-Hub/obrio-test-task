import React from "react";
import { QuizQuery } from "@/domain/model/quiz.query";
import { QuizResultDTO } from "@/domain/model/result.dto";
import Flex from "../atoms/Flex";
import Grid, { Gap } from "../atoms/Grid";
import { Space } from "../atoms/Space";
import TeamPicture from "../atoms/TeamPicture";
import QuizActions from "../molecules/QuizActions";
import QuizInfo from "../molecules/QuizInfo";

type Props = {
    quiz: QuizQuery;
    results: {
        [quizId: string]: QuizResultDTO;
    };
};

const QuizWelcomeDesktop = ({ quiz, results }: Props) => {
    const title = quiz.getTitle();
    const description = quiz.getDescription();

    return (
        <Space pr={60} pl={60} mt={60}>
            <Grid columns={2} alignitems="center">
                <Flex direction="column" gap={Gap.SemiBig}>
                    <QuizInfo title={title} description={description} />
                    <QuizActions quiz={quiz} results={results} />
                </Flex>
                <Flex justifyContent="center">
                    <TeamPicture />
                </Flex>
            </Grid>
        </Space>
    );
};

export default QuizWelcomeDesktop;

import { SomeApiAdapter } from "@/data/adapters/someApi.adapter";
import { QuizDTO } from "@/domain/model/quiz.dto";
import { RootState } from "@/domain/model/store.dao";
import { getQuiz } from "@/domain/repositories/getQuiz";
import Flex, { Gap } from "@/ui/atoms/Flex";
import Grid from "@/ui/atoms/Grid";
import { Space } from "@/ui/atoms/Space";
import TeamPicture from "@/ui/atoms/TeamPicture";
import QuizActions from "@/ui/molecules/QuizActions";
import QuizInfo from "@/ui/molecules/QuizInfo";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { useSelector } from "react-redux";

type Props = {
    dto: QuizDTO;
};

export const getStaticPaths: GetStaticPaths = async () => {
    const adapter = new SomeApiAdapter();
    const quizDTOs = await adapter.getAllQuizes();
    const paths = quizDTOs.map((dto) => ({
        params: {
            handle: dto.id,
        },
    }));

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props, { handle: string }> = async (
    context
) => {
    const { handle } = context.params!;
    const adapter = new SomeApiAdapter();
    const dto = await adapter.getQuizByID(handle);

    return {
        props: { dto },
    };
};

const QuizWelcomeScreen = ({ dto }: Props) => {
    const quiz = getQuiz(dto);
    const results = useSelector((state: RootState) => state.quizzes.results);

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

export default QuizWelcomeScreen;

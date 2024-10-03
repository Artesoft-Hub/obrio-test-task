import { QuestionType } from "@/domain/model/question.dto";

export const mockData = [
    {
        id: "test-1",
        title: "Cover all use-cases",
        description:
            "Includes branching, different types, conditional logic in titles",
        questions: [
            {
                id: "q1",
                title: "What do you enjoy the most?",
                type: QuestionType.SingleSelect,
                options: [
                    {
                        id: "a1",
                        title: "Reading books",
                        value: "Reading books",
                        nextQuestion: "q2",
                    },
                    {
                        id: "a2",
                        title: "Watching videos",
                        value: "Watching videos",
                        nextQuestion: "q3",
                    },
                    {
                        id: "a3",
                        title: "Hands-on activities",
                        value: "Hands-on activities",
                        nextQuestion: "q4",
                    },
                ],
            },
            {
                id: "q2",
                title: "What type of books do you prefer?",
                store_key: "fav_book",
                type: QuestionType.SingleSelect,
                options: [
                    {
                        id: "a4",
                        title: "Fiction",
                        value: "Fiction",
                        nextQuestion: "q5",
                    },
                    {
                        id: "a5",
                        title: "Non-fiction",
                        value: "Non-fiction",
                        nextQuestion: "q5",
                    },
                ],
            },
            {
                id: "q3",
                title: "What type of videos do you enjoy?",
                type: QuestionType.SingleSelect,
                options: [
                    {
                        id: "a6",
                        title: "Documentaries",
                        value: "Documentaries",
                        nextQuestion: "q5",
                    },
                    {
                        id: "a7",
                        title: "Entertainment",
                        value: "Entertainment",
                        nextQuestion: "q5",
                    },
                ],
            },
            {
                id: "q4",
                title: "What kind of hands-on activities do you prefer?",
                type: QuestionType.SingleSelect,
                options: [
                    {
                        id: "a8",
                        title: "Crafting",
                        value: "Crafting",
                        nextQuestion: "q5",
                    },
                    {
                        id: "a9",
                        title: "Building",
                        value: "Building",
                        nextQuestion: "q5",
                    },
                ],
            },
            {
                id: "q5",
                title: "How do you prefer to learn? Previously you selected {{fav_book}}",
                type: QuestionType.SingleSelect,
                options: [
                    {
                        id: "a10",
                        title: "By reading",
                        value: "By reading",
                        nextQuestion: "q6",
                    },
                    {
                        id: "a11",
                        title: "By watching videos",
                        value: "By watching videos",
                        nextQuestion: "q6",
                    },
                    {
                        id: "a12",
                        title: "By doing",
                        value: "By doing",
                        nextQuestion: "q6",
                    },
                ],
            },
            {
                id: "q6",
                title: "Can you do a back flip ?",
                type: QuestionType.SingleSelect,
                store_key: "can_do_backflip",
                options: [
                    {
                        id: "a10",
                        title: "Yes, I can !",
                        value: true,
                        nextQuestion: "info_1",
                    },
                    {
                        id: "a11",
                        title: "Unfortunattely not",
                        value: false,
                        nextQuestion: "info_2",
                    },
                ],
            },
            {
                id: "info_1",
                title: "So how does it work?",
                description:
                    "We analyze hundreds of data points to create your unique astrological blueprint. This is combined with AI to tailor-make your astrological insights, based on your answers. We’re going to change your relationship with astrology.",
                type: QuestionType.Info,
                options: [
                    {
                        id: "a12",
                        title: "Next",
                        value: "Next",
                        nextQuestion: "q7",
                    },
                ],
            },
            {
                id: "info_2",
                title: "So how does it work?",
                description:
                    "We analyze hundreds of data points to create your unique astrological blueprint. This is combined with AI to tailor-make your astrological insights, based on your answers. We’re going to change your relationship with astrology.",
                type: QuestionType.Info,
                options: [
                    {
                        id: "a12",
                        title: "Next",
                        value: "Next",
                        nextQuestion: "q8",
                    },
                ],
            },
            {
                id: "q7",
                title: "Route with truthy answer before info. You like {{fav_book}} {and can do a backflipp (can_do_backflip)}",
                type: QuestionType.SingleSelect,
                options: [
                    {
                        id: "a13",
                        title: "Yes !",
                        value: true,
                        nextQuestion: null,
                    },
                    {
                        id: "a14",
                        title: "Later",
                        value: false,
                        nextQuestion: null,
                    },
                ],
            },
            {
                id: "q8",
                title: "Route with falsy answer before info. You like {{fav_book}} {and can do a backflipp (can_do_backflip)}",
                type: QuestionType.SingleSelect,
                options: [
                    {
                        id: "a10",
                        title: "Yes !",
                        value: true,
                        nextQuestion: null,
                    },
                    {
                        id: "a11",
                        title: "Later",
                        value: false,
                        nextQuestion: null,
                    },
                ],
            },
        ],
    },
    {
        id: "test-2",
        title: "Second quiz",
        description: "Testing quizes",
        questions: [],
    },
];

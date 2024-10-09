import { QuestionType } from "@/domain/model/question.dto";

export const mockData = [
  {
    id: "obrio-example",
    title: "Obrio Figma File",
    description:
      "We analyze hundreds of data points to create your unique astrological blueprint. This is combined with AI to tailor-make your astrological insights, based on your answers. We’re going to change your relationship with astrology.",
    questions: [
      {
        id: "q1",
        title: "Select your gender:",
        type: QuestionType.OptionSelect,
        store_key: "gender",
        options: [
          {
            id: "a1",
            title: "Female",
            value: "Female",
            nextQuestion: "q2",
          },
          {
            id: "a2",
            title: "Male",
            value: "Male",
            nextQuestion: "q2",
          },
        ],
      },
      {
        id: "q2",
        title:
          "So we can get to know you better, tell us about your relationship status.",
        type: QuestionType.OptionSelect,
        options: [
          {
            id: "a3",
            title: "Single",
            value: "Single",
            nextQuestion: "q3",
          },
          {
            id: "a4",
            title: "In a relationship",
            value: "In a relationship",
            nextQuestion: "q4",
          },
        ],
      },
      {
        id: "q3",
        title: "Are you a single parent?",
        type: QuestionType.OptionSelect,
        store_key: "has_children",
        options: [
          {
            id: "a5",
            title: "Yes",
            value: true,
            nextQuestion: "q5",
          },
          {
            id: "a6",
            title: "No",
            value: false,
            nextQuestion: "q5",
          },
        ],
      },
      {
        id: "q4",
        title: "Are you a parent?",
        type: QuestionType.OptionSelect,
        store_key: "has_children",
        options: [
          {
            id: "a7",
            title: "Yes",
            value: true,
            nextQuestion: "q6",
          },
          {
            id: "a8",
            title: "No",
            value: false,
            nextQuestion: "q6",
          },
        ],
      },
      {
        id: "q5",
        title:
          "{{gender}} {who have children (has_children)} need a slightly different approach to improve their relationship. Which statement best describes you?",
        type: QuestionType.OptionSelect,
        options: [
          {
            id: "a9",
            title:
              "I'm very unhappy with how things are going in my relationship",
            value:
              "I'm very unhappy with how things are going in my relationship",
            nextQuestion: "q7",
          },
          {
            id: "a10",
            title:
              "I'm unhappy with parts of my relationship, but some things are working well",
            value:
              "I'm unhappy with parts of my relationship, but some things are working well",
            nextQuestion: "q7",
          },
          {
            id: "a11",
            title: "I'm generally happy in my relationship",
            value: "I'm generally happy in my relationship",
            nextQuestion: "q7",
          },
        ],
      },
      {
        id: "q6",
        title:
          "Single {{gender}} {who have children (has_children)} need a slightly different approach to find their perfect partner. But first, how did you feel in your last relationship?",
        type: QuestionType.OptionSelect,
        options: [
          {
            id: "a12",
            title:
              "I was unhappy with low things were going in my relationship",
            value:
              "I was unhappy with low things were going in my relationship",
            nextQuestion: "q8",
          },
          {
            id: "a13",
            title:
              "I was unhappy with parts of my relationship, but some thing were working",
            value:
              "I was unhappy with parts of my relationship, but some thing were working",
            nextQuestion: "q8",
          },
          {
            id: "a14",
            title: "I was generally happy with my relationship",
            value: "I was generally happy with my relationship",
            nextQuestion: "q8",
          },
          {
            id: "a15",
            title: "I've never been in a relationship",
            value: "I've never been in a relationship",
            nextQuestion: "q8",
          },
        ],
      },
      {
        id: "q7",
        title: "Do you tend to overthink?",
        type: QuestionType.OptionSelect,
        options: [
          {
            id: "a16",
            title: "Yes",
            value: true,
            nextQuestion: "info_1",
          },
          {
            id: "a17",
            title: "No",
            value: false,
            nextQuestion: "info_2",
          },
        ],
      },
      {
        id: "q8",
        title: "Is your partner an introvert or extrovert?",
        type: QuestionType.OptionSelect,
        options: [
          {
            id: "a18",
            title: "Introvert",
            value: "Introvert",
            nextQuestion: "q9",
          },
          {
            id: "a19",
            title: "Extrovert",
            value: "Extrovert",
            nextQuestion: "q9",
          },
          {
            id: "a20",
            title: "A bit of both",
            value: "A bit of both",
            nextQuestion: "q9",
          },
        ],
      },
      {
        id: "q9",
        title: "What is your partner's gender?",
        type: QuestionType.OptionSelect,
        options: [
          {
            id: "a21",
            title: "Female",
            value: "Female",
            nextQuestion: "q10",
          },
          {
            id: "a22",
            title: "Male",
            value: "Male",
            nextQuestion: "q10",
          },
        ],
      },
      {
        id: "q10",
        title: "Do you agree with the statement below?",
        description:
          "“My partner and I make sex a priority in our relationship”",
        type: QuestionType.OptionSelect,
        options: [
          {
            id: "a23",
            title: "Strongly agree",
            value: "Strongly agree",
            nextQuestion: "q11",
          },
          {
            id: "a24",
            title: "Agree",
            value: "Agree",
            nextQuestion: "q11",
          },
          {
            id: "a25",
            title: "Neutral",
            value: "Neutral",
            nextQuestion: "q11",
          },
          {
            id: "a26",
            title: "Disagee",
            value: "Disagee",
            nextQuestion: "q11",
          },
          {
            id: "a27",
            title: "Strongly disagree",
            value: "Strongly disagree",
            nextQuestion: "q11",
          },
        ],
      },
      {
        id: "q11",
        title: "When you think about your relationship goals, you feel...?",
        type: QuestionType.OptionSelect,
        options: [
          {
            id: "a28",
            title: "Optimistic! They are totally doable, with some guidance.",
            value: "Optimistic! They are totally doable, with some guidance.",
            nextQuestion: "q12",
          },
          {
            id: "a29",
            title: "Cautious. I've struggled before, but I'm hopeful.",
            value: "Cautious. I've struggled before, but I'm hopeful.",
            nextQuestion: "q12",
          },
          {
            id: "a30",
            title: "I'm feeling a little anxious, honestly.",
            value: "I'm feeling a little anxious, honestly.",
            nextQuestion: "q12",
          },
        ],
      },
      {
        id: "q12",
        title: "Where did you hear about us?",
        type: QuestionType.OptionSelect,
        options: [
          {
            id: "a31",
            title: "Poster or Billboard",
            value: "Poster or Billboard",
            nextQuestion: null,
          },
          {
            id: "a32",
            title: "Friend or Family",
            value: "Friend or Family",
            nextQuestion: null,
          },
          {
            id: "a33",
            title: "Instagram",
            value: "Instagram",
            nextQuestion: null,
          },
          {
            id: "a34",
            title: "Direct Mail or Package Insert",
            value: "Direct Mail or Package Insert",
            nextQuestion: null,
          },
          {
            id: "a35",
            title: "Online TV or Streaming TV",
            value: "Online TV or Streaming TV",
            nextQuestion: null,
          },
          {
            id: "a36",
            title: "TV",
            value: "TV",
            nextQuestion: null,
          },
          {
            id: "a37",
            title: "Radio",
            value: "Radio",
            nextQuestion: null,
          },
          {
            id: "a38",
            title: "Search Engine (Google, Bing, etc.)",
            value: "Search Engine (Google, Bing, etc.)",
            nextQuestion: null,
          },
          {
            id: "a39",
            title: "Newspaper or Magazine",
            value: "Newspaper or Magazine",
            nextQuestion: null,
          },
          {
            id: "a40",
            title: "Facebook",
            value: "Facebook",
            nextQuestion: null,
          },
          {
            id: "a41",
            title: "Blog Post or Website Review",
            value: "Blog Post or Website Review",
            nextQuestion: null,
          },
          {
            id: "a42",
            title: "Podcast",
            value: "Podcast",
            nextQuestion: null,
          },
          {
            id: "a43",
            title: "Influencer",
            value: "Influencer",
            nextQuestion: null,
          },
          {
            id: "a44",
            title: "Youtube",
            value: "Youtube",
            nextQuestion: null,
          },
          {
            id: "a45",
            title: "Pinterest",
            value: "Pinterest",
            nextQuestion: null,
          },
          {
            id: "a46",
            title: "Other",
            value: "Other",
            nextQuestion: null,
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
            id: "a47",
            title: "Next",
            nextQuestion: "q13",
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
            id: "a48",
            title: "Next",
            nextQuestion: "q14",
          },
        ],
      },
      {
        id: "q13",
        title: "What is most important to you?",
        type: QuestionType.OptionSelect,
        options: [
          {
            id: "a49",
            title: "Success",
            value: "Success",
            nextQuestion: "q12",
          },
          {
            id: "a50",
            title: "Romance",
            value: "Romance",
            nextQuestion: "q12",
          },
          {
            id: "a51",
            title: "Stability",
            value: "Stability",
            nextQuestion: "q12",
          },
          {
            id: "a52",
            title: "Freedom",
            value: "Freedom",
            nextQuestion: "q12",
          },
        ],
      },
      {
        id: "q14",
        title: "Is emotional control tricky for you?",
        type: QuestionType.OptionSelect,
        options: [
          {
            id: "a53",
            title: "Yes",
            value: "Yes",
            nextQuestion: "q12",
          },
          {
            id: "a54",
            title: "Sometimes",
            value: "Sometimes",
            nextQuestion: "q12",
          },
          {
            id: "a55",
            title: "Rarely",
            value: "Rarely",
            nextQuestion: "q12",
          },
          {
            id: "a56",
            title: "Not at all",
            value: "Not at all",
            nextQuestion: "q12",
          },
        ],
      },
    ],
  },
  {
    id: "test-2",
    title: "Cover all use-cases",
    description:
      "Includes branching, different types, conditional logic in titles",
    questions: [
      {
        id: "q1",
        title: "What do you enjoy the most?",
        type: QuestionType.OptionSelect,
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
        type: QuestionType.OptionSelect,
        options: [
          {
            id: "a4",
            title: "Fiction",
            value: "Fiction",
            nextQuestion: "q55",
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
        id: "q55",
        title: "What is your name?",
        store_key: "name",
        type: QuestionType.TextInput,
        options: [
          {
            id: "a4",
            title: "Next",
            nextQuestion: "q5",
          },
        ],
      },
      {
        id: "q3",
        title: "What type of videos do you enjoy?",
        type: QuestionType.OptionSelect,
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
        type: QuestionType.OptionSelect,
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
        title:
          "How do you prefer to learn? Previously you selected {{fav_book}}",
        type: QuestionType.OptionSelect,
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
        type: QuestionType.OptionSelect,
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
            nextQuestion: "q8",
          },
        ],
      },
      {
        id: "q7",
        title:
          "Route with truthy answer before info. You like {{fav_book}} {and can do a backflipp (can_do_backflip)}",
        type: QuestionType.OptionSelect,
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
        title:
          "Route with falsy answer before info. You like {{fav_book}} {and can do a backflipp (can_do_backflip)}",
        type: QuestionType.OptionSelect,
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
];

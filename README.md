# Obrio Quiz Application

This is a **Next.js** application built using **Static Site Generation (SSG)** for improved performance and SEO. The project is centered around interactive quizzes, offering multiple types of questions to the user and displaying their results upon completion.

## Features

- **Single Choice Questions**: Users can select one option from a set of choices.
- **Info Screen**: Provides additional information after specific questions.
- **Text Input**: Allows users to submit free-form answers.
- **Ability to Change Answer**: Allows users to submit different answer for the same question.
- **Result Summary**: After completing the quiz, users can view their results.

## Running the Application

To run the project locally, follow these steps:

1. Install dependencies:
   ```bash
   npm install
2. Build the project:
    ```bash
   npm run build
3. Start the application:
    ```bash
   npm run build
The application will be available at http://localhost:3000.

## Downsides

This project was built in a short terms, so there are several areas for improvement:
-	Needs More Decomposition: Some components and logic could be further broken down to improve readability and maintainability. Especially `useHistory()`
-   Lack of Redux Persist: Quiz progress and results are not persisted across page reloads or sessions.
-   Issue with framer-motion: There is a known issue with the framer-motion component on the initial quiz request, affecting smooth animations.
-   Mixed Use of Queries and DTOs: There’s an inconsistent approach to managing data across different layers, such as the `QuizResultsDTO` and queries.
-   Lack of Tests: Unit and integration tests are missing, which would improve the stability and reliability of the codebase.

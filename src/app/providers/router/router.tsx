import { QuizCreatePage } from "@/pages/quiz/QuizCreatePage";
import { ROUTES } from "@/shared/config/router/routes";
import { createBrowserRouter } from "react-router-dom";
import { QuizPage } from "@/pages/quiz/QuizPage";
import { QuizResultPage } from "@/pages/quiz/QuizResultPage/ui/QuizResultPage";
import { QuestionPage } from "@/pages/question";
import { MainPage } from "@/pages/main";

export const router = createBrowserRouter([
    {
        path: ROUTES.MAIN,
        element: <MainPage/>
    },
    {
        path: ROUTES.QUIZ_CREATE,
        element: <QuizCreatePage/>
    },
    {
        path: ROUTES.QUIZ,
        element: <QuizPage/>
    },
    {
        path: ROUTES.QUIZ_RESULT,
        element: <QuizResultPage/>
    },
    {
        path: ROUTES.QUESTION,
        element: <QuestionPage/>
    },
])
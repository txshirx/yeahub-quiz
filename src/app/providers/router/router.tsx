import { QuizCreatePage } from "@/pages/quiz/QuizCreatePage";
import { ROUTES } from "@/shared/config/router/routes";
import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "@/app/layouts/AppLayout";
import { QuizPage } from "@/pages/quiz/QuizPage";
import { QuizResultPage } from "@/pages/quiz/QuizResultPage/ui/QuizResultPage";
import { QuestionPage } from "@/pages/question";
import { MainPage } from "@/pages/main";

export const router = createBrowserRouter([
    {
        path: ROUTES.MAIN,
        element: <AppLayout><MainPage/></AppLayout>
    },
    {
        path: ROUTES.QUIZ_CREATE,
        element: <AppLayout><QuizCreatePage/></AppLayout>,
    },
    {
        path: ROUTES.QUIZ,
        element: <AppLayout><QuizPage/></AppLayout>
    },
    {
        path: ROUTES.QUIZ_RESULT,
        element: <AppLayout><QuizResultPage/></AppLayout>
    },
    {
        path: ROUTES.QUESTION,
        element: <AppLayout> <QuestionPage/></AppLayout>
    },
])
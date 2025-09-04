import { filtersApi } from "@/entities/filters";
import { QuizCreatePage } from "@/pages/quiz/QuizCreatePage";
import { ROUTES } from "@/shared/config/router/routes";
import { createBrowserRouter } from "react-router-dom";
import { store } from "../store/store";
import { AppLayout } from "@/app/layouts/AppLayout";

export const router = createBrowserRouter([
    {
        path: ROUTES.MAIN,
        element: <></>
    },
    {
        path: ROUTES.QUIZ_CREATE,
        element: <AppLayout><QuizCreatePage/></AppLayout>,
        loader: async () => {
            const skills = await store.dispatch(
                filtersApi.endpoints.getSkills.initiate()
            ).unwrap()
            const specializations = await store.dispatch(
                filtersApi.endpoints.getSpecializations.initiate()
            ).unwrap()
            return { skills, specializations }
        }
    },
    {
        path: ROUTES.QUIZ,
        element: <></>
    },
    {
        path: ROUTES.QUIZ_RESULT,
        element: <></>
    },
    {
        path: ROUTES.QUESTION,
        element: <></>
    },
])
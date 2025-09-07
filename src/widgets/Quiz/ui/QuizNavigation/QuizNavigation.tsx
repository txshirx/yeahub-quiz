import { ROUTES } from "@/shared/config/router/routes"
import { RightArrowNavigation } from "@/shared/ui/icons"
import { Link, useLocation } from "react-router-dom"
import style from './QuizNavigation.module.css'


export const QuizNavigation = () => {
    const location = useLocation()

    return (
        <div className={style.quizNavContainer}>
            {
                location.pathname === ROUTES.QUIZ_CREATE ? 
                (
                    <div className={style.content}>
                        <Link to={ROUTES.QUIZ_CREATE}><span>Собеседование</span> <RightArrowNavigation/></Link>
                    </div>
                )
                : location.pathname === ROUTES.QUIZ ? 
                (
                    <div className={style.content}>
                        <Link to={ROUTES.QUIZ_CREATE}><span>Собеседование</span> <RightArrowNavigation/></Link>
                        <Link to={ROUTES.QUIZ}><span>Квиз</span> <RightArrowNavigation/></Link>
                    </div>
                ) 
                :
                (
                    <div className={style.content}>
                        <Link to={ROUTES.QUIZ_CREATE}><span>Собеседование</span> <RightArrowNavigation/></Link>
                        <Link to={ROUTES.QUIZ_RESULT}><span>Результат</span> <RightArrowNavigation/></Link>
                    </div>
                )
            }
        </div>
    )
}
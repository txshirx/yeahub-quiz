import { ChooseComplexity } from "./ChooseComplexity/ChooseComplexity"
import { ChooseMode } from "./ChooseMode/ChooseMode"
import { ChooseSkills } from "./ChooseSkills/ChooseSkills"
import styles from './QuizFilter.module.css'
import { ChooseSpecializations } from "./ChooseSpecializations/ChooseSpecializations"
import { ChooseLimit } from "./ChooseLimit/ChooseLimit"
import { StartQuizButton } from "@/shared/ui/components"
import { useFilterParams } from "../model/hooks/useFilterParams"
import { useAppSelector } from "@/app/providers/store/store"
import { newQuizSlice } from "@/shared/slices/quiz.slice"
import { quizQuery } from "../api/quiz.api"


export const QuizFilters = () => {
    const { filtersParams: params } = useFilterParams()
    const newQuizFlag = useAppSelector(state => newQuizSlice.selectors.selectNewQuizFlag(state))
    const { data } = quizQuery.useGetQuizQuery(params, { skip: newQuizFlag })
    console.log(data)

    return (
        <div className={styles.quizFilters}>
            <div className={styles.sideBar}>
                <h2>Собеседование</h2>
                <ChooseSpecializations/>
                <ChooseSkills/>
            </div>
            <div className={styles.sideBar}>
                <ChooseComplexity/>
                <ChooseMode/>
                <ChooseLimit/>
                <StartQuizButton title="Начать"/>
            </div>
        </div>
    )
}
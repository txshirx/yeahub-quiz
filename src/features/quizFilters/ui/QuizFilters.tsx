import { useAppSelector } from "@/app/providers/store/store"
import { quizQuery } from "../api/quiz.api"
import { ChooseComplexity } from "./ChooseComplexity/ChooseComplexity"
import { ChooseCount } from "./ChooseCount/ChooseCount"
import { ChooseMode } from "./ChooseMode/ChooseMode"
import { ChooseSkills } from "./ChooseSkills/ChooseSkills"
import styles from './QuizFilter.module.css'
import { quizFiltersSlice } from "../model/quizFilters.slice"
import { useDebounce } from "@/shared/hooks"
import type { FiltersParamsType } from "@/shared/config/api/types"

export const QuizFilters = () => {
    const params = useAppSelector(state => quizFiltersSlice.selectors.selectAllParams(state))
    const debauncedValue = useDebounce(params, 300)
    const {data} = quizQuery.useGetQuizQuery(debauncedValue as FiltersParamsType)
    console.log(data)

    return (
        <div className={styles.quizFilters}>
            
            <div className={styles.sideBar}>
                <h2>Собеседование</h2>
                <ChooseSkills/>
            </div>
            <div className={styles.sideBar}>
                <ChooseComplexity/>
                <ChooseMode/>
                <ChooseCount/>
            </div>
        </div>
    )
}
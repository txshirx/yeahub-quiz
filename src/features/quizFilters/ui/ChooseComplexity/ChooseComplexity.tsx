import { FilterButton } from "@/shared/ui/components/FilterButton"
import { COMPLEXITY } from "../../model/constants"
import styles from './ChooseComplexity.module.css'
import { useAppDispatch } from "@/app/providers/store/store"
import { quizFiltersSlice } from "../../model/quizFilters.slice"

export const ChooseComplexity = () => {
    const dispatch = useAppDispatch()
    const appendFilterHandler = (data: number[]) => {
        dispatch(quizFiltersSlice.actions.changeComplexity({ value: data }))
    }

    return (
        <div >
            <div className={styles.filterItem}>
                <p>Уровень сложности</p>
                <div className={styles.complexityContainer}>
                    {(Object.entries(COMPLEXITY)).map(item => (
                        <FilterButton action={() => appendFilterHandler(item[1])} key={item[0]} title={item[0]} id={item[1][0]}/>
                    ))}
                </div>  
            </div>
        </div>
    )
}
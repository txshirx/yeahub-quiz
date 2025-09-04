import { FilterButton } from "@/shared/ui/components/FilterButton"
import { MODE } from "../../model/constants"
import styles from './ChooseMode.module.css'
import { useAppDispatch } from "@/app/providers/store/store"
import type { ModeType } from "@/shared/config/api/types"
import { quizFiltersSlice } from "../../model/quizFilters.slice"

export const ChooseMode = () => {
    const dispatch = useAppDispatch()

    // const addModeHandler = (mode: ModeType) => {
    //     dispatch(quizFiltersSlice.actions.addMode({ mode }))
    // }

    return (
        <div >
            <div className={styles.filterItem}>
                <p>Выберите режим</p>
                <div className={styles.modeContainer}>
                    {(Object.values(MODE)).map((item, ind) => (
                        <FilterButton  key={ind} title={item.title} id={ind}/>
                    ))}
                </div>  
            </div>
        </div>
    )
}
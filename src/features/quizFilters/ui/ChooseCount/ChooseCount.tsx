import { MinusIcon, PlusIcon } from '@/shared/ui/icons'
import styles from './ChooseCount.module.css'
import { useAppDispatch, useAppSelector } from '@/app/providers/store/store'
import { quizFiltersSlice } from '../../model/quizFilters.slice'

export const ChooseCount = () => {
    const count = useAppSelector(state => quizFiltersSlice.selectors.selectCount(state))
    const dispatch = useAppDispatch()

    return (
        <div >
            <div className={styles.filterItem}>
                <p>Количество вопросов</p>
                <div className={styles.countButton}>
                    <div onClick={() => dispatch(quizFiltersSlice.actions.decrementCount())}><MinusIcon/></div>
                    {count}
                    <div onClick={() => dispatch(quizFiltersSlice.actions.incrementCount())}><PlusIcon/></div>
                </div>
            </div>
        </div>
    )
} 
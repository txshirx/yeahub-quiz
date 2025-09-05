import { MinusIcon, PlusIcon } from '@/shared/ui/icons'
import styles from './ChooseLimit.module.css'
import { useFilterParams } from '../../model/hooks/useFilterParams'

export const ChooseLimit = () => {
    const { updateFilters, filtersParams } = useFilterParams()

    return (
        <div >
            <div className={styles.filterItem}>
                <p>Количество вопросов</p>
                <div className={styles.countButton}>
                    <div onClick={() => filtersParams.limit > 1 ? updateFilters('limit', filtersParams.limit - 1) : null}><MinusIcon/></div>
                    {filtersParams.limit}
                    <div onClick={() => updateFilters('limit', filtersParams.limit + 1)}><PlusIcon/></div>
                </div>
            </div>
        </div>
    )
} 
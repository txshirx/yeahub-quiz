import { filtersApi } from '@/entities/filters'
import { FilterButton } from '@/shared/ui/components/FilterButton'
import styles from './ChooseSpecializations.module.css'

export const ChooseSpecializations = () => {
    const { data, isLoading } = filtersApi.useGetSpecializationsQuery()

    if (isLoading) return <>Loading...</>

    return (
        <div >
            <div className={styles.filterItem}>
                <p>Специализация</p>
                <div className={styles.specializationsContainer}>
                    {data?.data.map(item => (
                        <FilterButton key={item.id} title={item.title} id={item.id}/>
                    ))}
                </div>  
                
            </div>
        </div>
    )
}
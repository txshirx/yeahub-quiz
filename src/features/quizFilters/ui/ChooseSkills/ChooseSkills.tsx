import { filtersApi } from '@/entities/filters'
import styles from './ChooseSkills.module.css'
import { useFilterParams } from '../../model/hooks/useFilterParams'
import { FilterButton } from '../FilterButton/FilterButton'


export const ChooseSkills = () => {
    const { data, isLoading } = filtersApi.useGetSkillsQuery()
    const { updateFilters } = useFilterParams()

    if (isLoading) return <>Loading...</>

    return (
        <div >
            <div className={styles.filterItem}>
                <p>Категории вопросов</p>
                <div className={styles.skillsContainer}>
                    {data?.data.map(item => (
                        <FilterButton action={() => updateFilters('skills', [item.id])} key={item.id} filter='skills' imageSrc={item.imageSrc} title={item.title} data={String(item.id)}/>
                    ))}
                </div>  
            </div>
        </div>
    )
}
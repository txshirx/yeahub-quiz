import { filtersApi } from '@/entities/filters'
import styles from './ChooseSkills.module.css'
import { FilterButton } from '@/shared/ui/components/FilterButton'
import { useAppDispatch } from '@/app/providers/store/store'
import { quizFiltersSlice } from '../../model/quizFilters.slice'


export const ChooseSkills = () => {
    const dispatch = useAppDispatch()
    const { data, isLoading } = filtersApi.useGetSkillsQuery()

    const skillsHandler = (skill: string) => {
        dispatch(quizFiltersSlice.actions.changeSkills({ skill }))
    }

    if (isLoading) return <>Loading...</>

    return (
        <div >
            <div className={styles.filterItem}>
                <p>Категории вопросов</p>
                <div className={styles.skillsContainer}>
                    {data?.data.map(item => (
                        <FilterButton action={() => skillsHandler(item.id.toString())} key={item.id} imageSrc={item.imageSrc} title={item.title} id={item.id}/>
                    ))}
                </div>  
            </div>
        </div>
    )
}
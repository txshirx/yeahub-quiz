import { useAppDispatch } from '@/app/providers/store/store'
import styles from './StartQuizButton.module.css'
import { newQuizSlice } from '@/shared/slices/quiz.slice'
export const StartQuizButton = ({ title } : { title: string }) => {
    const dispatch = useAppDispatch()

    return (
        <button onClick={() => dispatch(newQuizSlice.actions.changeQuizFlag())} className={styles.startQuizButton}>
            <span>{title}</span>
        </button>
    )
}
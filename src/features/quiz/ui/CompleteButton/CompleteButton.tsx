import { useNavigate } from 'react-router-dom'
import styles from './CompleteButton.module.css'
import { ROUTES } from '@/shared/config/router/routes'
import { useLocalStorage } from '@/shared/hooks'
import { STORAGE_KEYS } from '@/shared/constants'
import { useEffect } from 'react'
import type { Question } from '@/shared/config/api/types'

export const CompleteButton = () => {
    const navigate = useNavigate()
    const { setStorageValue } = useLocalStorage(STORAGE_KEYS.IS_ACTIVE, false)
    const { setStorageValue: setIsLearned } = useLocalStorage(STORAGE_KEYS.IS_LEARNED_KEY)
    const { storageValue: questions } = useLocalStorage<Question[]>(STORAGE_KEYS.QUESTIONS_KEY)
    const { setStorageValue: setAnswered } = useLocalStorage(STORAGE_KEYS.ANSWERED_QUESTIONS_KEY, 0)

    const handleComplete = () => {
        setStorageValue(false)
        setAnswered(0)
        navigate(ROUTES.QUIZ_RESULT)
    }

    const handleClearAnswered = (id: number) => {
        setIsLearned({ isAnsweredStatus: 'none', buttonsState: 'none' }, `${STORAGE_KEYS.IS_LEARNED_KEY}_${id}`)
    }
    
    useEffect(() => {
        if (questions) {
            questions?.forEach(item => {
                handleClearAnswered(item.id)
            })
        }
    }, [])

    return (
        <button onClick={() => handleComplete()} className={styles.completeButton}>Проверить</button>
    )
}
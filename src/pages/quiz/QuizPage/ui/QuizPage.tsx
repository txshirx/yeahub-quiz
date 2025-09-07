import { Header } from "@/widgets/Header"
import styles from './QuizPage.module.css'
import { QuestionCard } from "@/entities/quiz"
import { CompleteButton, LearnedButtons, ShowAnswer, StoppedButton, SwitchQuestion } from "@/features/quiz"
import { useLocalStorage } from "@/shared/hooks"
import { STORAGE_KEYS } from "@/shared/constants"
import type { Question } from "@/shared/config/api/types"
import { ProgressBar, QuizNavigation } from "@/widgets/Quiz"

export const QuizPage = () => {
    const { storageValue: currentQuestion } = useLocalStorage<number>(STORAGE_KEYS.ACTIVE_QUESTION_KEY)
    const { storageValue: answeredQuestions } = useLocalStorage<number>(STORAGE_KEYS.ANSWERED_QUESTIONS_KEY)
    const { storageValue: questions } = useLocalStorage<Question[]>(STORAGE_KEYS.QUESTIONS_KEY)
    return (
        <div className={styles.wrapper}>
            <Header/>
            <QuizNavigation/>
            <ProgressBar answeredQuestions={answeredQuestions ? answeredQuestions : 0} maxQuestions={questions?.length as number}/>
            <div className={styles.quizContainer}>
                {questions?.filter((_, ind) => currentQuestion && ind === currentQuestion - 1).map(item => (
                    <QuestionCard 
                        key={item.id}
                        title={item ? item.title : ''} 
                        ShowAnswer={ShowAnswer} 
                        LearnedButtons={LearnedButtons}
                        shortAnswer={item ? item.shortAnswer : ''}
                        CompleteButton={CompleteButton}
                        StoppedButton={StoppedButton}
                        SwitchQuestion={SwitchQuestion}
                        id={item.id}
                        flag={questions.length === answeredQuestions}
                    />
                ))}
            </div>
        </div>
    )
}
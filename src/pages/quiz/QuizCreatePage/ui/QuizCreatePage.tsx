import { Header } from "@/widgets/Header"
import styles from "./QuizCreatePage.module.css"
import { QuizFilters } from "@/features/quizFilters"

export const QuizCreatePage = () => {
    return (
        <>
            <Header/>
            <div className={styles.quizContainer}>
                <div className={styles.quiz}>
                    <QuizFilters/>
                </div>
            </div>
        </>
    )
}
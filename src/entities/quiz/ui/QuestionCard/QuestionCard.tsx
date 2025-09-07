import styles from './QuestionCard.module.css'
import { ItemEllipse } from '@/shared/ui/icons';

type QuestionCardPropsType = {
    id: number
    title: string,
    shortAnswer: string
    ShowAnswer: React.ComponentType<{ shortAnswer: string }>,
    LearnedButtons: React.ComponentType<{ id: number }>,
    CompleteButton: React.ComponentType,
    StoppedButton: React.ComponentType,
    SwitchQuestion: React.ComponentType<{ id: number }>,
    flag: boolean,
}

export const QuestionCard = (
    { 
        id,
        title,
        ShowAnswer, 
        LearnedButtons, 
        shortAnswer,
        SwitchQuestion,
        CompleteButton,
        flag, 
        StoppedButton
    } : QuestionCardPropsType) => {
    return (
        <div className={styles.card}>
            <SwitchQuestion id={id}/>
            <div className={styles.cardContent}>
                <div className={styles.titleBlock}>
                    <ItemEllipse/>
                    <h2>{title}</h2>
                </div>
                <ShowAnswer shortAnswer={shortAnswer}/>
                <LearnedButtons id={id}/>
            </div>
            { flag ? <CompleteButton/> : <StoppedButton/>}
        </div>
    )
}
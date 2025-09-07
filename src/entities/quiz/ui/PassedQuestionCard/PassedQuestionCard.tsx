import { DislikeIcon, LikeIcon, QuestionMockIcon } from '@/shared/ui/icons'
import styles from './PassedQuestionCard.module.css'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/shared/config/router/routes'
import type { IsAnsweredStatusType } from '@/shared/config/model/types'

type PropsType = {
    imageSrc: string,
    title: string,
    flag: IsAnsweredStatusType,
    id: number
}
export const PassedQuestionCard = ({ imageSrc, title, flag, id } : PropsType) => {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate(`${ROUTES.QUESTIONS}/${id}`)} className={styles.previewCardContainer}>
            <div>
                {imageSrc ? <img className={styles.questionImage} src={imageSrc}/> : <QuestionMockIcon/>}
            </div>
            <div className={styles.mainContent}>
                <span>{title}</span>
                <div>
                    {flag === "not_learned" ? 
                        (
                            <button className={styles.learnedButton}>
                                <DislikeIcon />
                                <span>Не знаю</span>
                            </button>
                
                        ) 
                        : 
                        (
                            <button style={{color: '#6A0BFF', backgroundColor: '#f8f6ff'}} className={styles.learnedButton}>
                                <LikeIcon fill={'#6A0BFF'} />
                                <span>Знаю</span>
                            </button>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
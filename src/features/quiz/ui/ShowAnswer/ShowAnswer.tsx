import { Answer } from "@/shared/ui/components"
import { useEffect, useState } from "react"
import styles from './ShowAnswer.module.css'
export const ShowAnswer = ({ shortAnswer } : { shortAnswer: string }) => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        setVisible(false)
    }, [shortAnswer])

    return (
        <div>
            {!visible ? 
                (   
                    <div onClick={() => setVisible(prev => !prev)}>
                        <p className={styles.showText}>Посмотреть ответ</p>
                    </div>
                )
                : 
                (
                    <>
                        <Answer answer={shortAnswer}/>
                        <div onClick={() => setVisible(prev => !prev)}>
                            <p className={styles.showText}>Скрыть ответ</p>
                        </div> 
                    </>
                )
            }
        </div>
    )
}
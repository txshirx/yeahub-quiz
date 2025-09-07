import { useEffect, useRef, useState } from 'react';
import style from './ProgressBar.module.css'

type ProgressBarPropsType = {
    maxQuestions: number, 
    answeredQuestions: number
}

export const ProgressBar = ({ maxQuestions, answeredQuestions } : ProgressBarPropsType) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (!containerRef.current) return;

        const observer = new ResizeObserver(([entry]) => {
            setWidth(entry.contentRect.width);
        });

        observer.observe(containerRef.current);

        return () => observer.disconnect();
    }, []);
    const progressWidth = width / maxQuestions
    const progressItem = progressWidth * answeredQuestions 

    return (
        <div className={style.progressBarContainer}>
            <div className={style.progressBar}>
                <div className={style.progressBarNav}>
                    <h2>Вопросы собеседования</h2> {answeredQuestions}/{maxQuestions}
                </div>
                <div className={style.line} ref={containerRef}> <div style={{ width: progressItem <= width ? progressItem : width }} className={style.progressLine}> </div> </div>
            </div>
        </div>
    )
}
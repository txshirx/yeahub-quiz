import { useNavigate, useParams } from "react-router-dom";
import { questionQuery } from "../api/questions.api";
import styles from './QuestionCard.module.css'
import { Answer, RatingItem } from "@/shared/ui/components";

export const QuestionCard = () => {
    const { questionId: id } = useParams<{ questionId: string }>();
    const navigate = useNavigate();

    const { data } = questionQuery.useGetQuestionQuery(Number(id));

    const backHandler = () => {
        navigate(-1);
    };


    return (
        <div className={styles.wrapper}>
            <div className={styles.leftColumn}>
                <div onClick={backHandler} className={styles.backButton}>
                    {'<'}
                    <p className={styles.backText}>Назад</p>
                </div>

                <div className={styles.card}>
                    <p className={styles.title}>{data?.title}</p>
                    <span>{data?.description}</span>
                </div>

                {data?.shortAnswer === data?.longAnswer ? (
                    <div className={styles.card}>
                        <p className={styles.sectionTitle}>Полный ответ</p>
                        {data?.longAnswer ? <Answer answer={data.longAnswer} /> : ""}
                    </div>
                ) : (
                    <>
                        <div className={styles.card}>
                            <p className={styles.sectionTitle}>Краткий ответ</p>
                            {data?.shortAnswer ? <Answer answer={data.shortAnswer} /> : ""}
                        </div>
                        <div className={styles.card}>
                            <p className={styles.sectionTitle}>Полный ответ</p>
                            {data?.longAnswer ? <Answer answer={data.longAnswer} /> : ""}
                        </div>
                    </>
                )}
            </div>

            <div className={styles.rightColumn}>
                <div>
                    <span>Уровень:</span>
                    <div className={styles.tags}>
                        <RatingItem rate={data?.rate} />
                        <RatingItem complexity={data?.complexity} />
                    </div>
                </div>

                <div>
                    <span>Навыки:</span>
                    <div className={styles.tags}>
                        {data?.questionSkills.map((item) => (
                            <RatingItem title={item.title}/>
                        ))}
                    </div>
                </div>

                <div>
                    <span>Ключевые слова:</span>
                    <div className={styles.tags}>
                        {data?.keywords.map((item) => (
                            <span key={item} className={styles.keyword}>
                                #{item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

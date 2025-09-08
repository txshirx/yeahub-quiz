import type { Question } from "@/shared/config/api/types"
import { RatingItem } from "@/shared/ui/components"
import style from './QuestionFiltersCard.module.css'

export const QuestionFiltersCard = ({ data } : { data: Question | undefined }) => {
    return (
        <div className={style.rightColumn}>
                <div>
                    <span>Уровень:</span>
                    <div className={style.tags}>
                        <RatingItem rate={data?.rate} />
                        <RatingItem complexity={data?.complexity} />
                    </div>
                </div>

                <div>
                    <span>Навыки:</span>
                    <div className={style.tags}>
                        {data?.questionSkills.map((item) => (
                            <RatingItem key={item.id} title={item.title}/>
                        ))}
                    </div>
                </div>

                <div>
                    <span>Ключевые слова:</span>
                    <div className={style.tags}>
                        {data?.keywords.map((item) => (
                            <span key={item} className={style.keyword}>
                                #{item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
    )
}
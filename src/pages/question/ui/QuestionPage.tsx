import { QuestionCard } from "@/entities/question"
import { questionQuery } from "@/entities/question/api/questions.api";
import { Header } from "@/widgets/Header"
import { useParams, useNavigate } from "react-router-dom";
import style from './QuestionPage.module.css'

export const QuestionPage = () => {
    const { questionId: id } = useParams<{ questionId: string }>();
    

    const { data } = questionQuery.useGetQuestionQuery(Number(id));

    
    return (
        <div className={style.wrapper}>
            <Header/>
            <QuestionCard data={data}/>
        </div>
    )
}
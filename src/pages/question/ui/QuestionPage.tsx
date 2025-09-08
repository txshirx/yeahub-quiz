import { QuestionCard } from "@/entities/question"
import { questionQuery } from "@/entities/question/api/questions.api";
import { Header } from "@/widgets/Header"
import { useParams } from "react-router-dom";
import style from './QuestionPage.module.css'
import { QuestionFiltersCard } from "./QuestionFiltersCard/QuestionFiltersCard";

export const QuestionPage = () => {
    const { questionId: id } = useParams<{ questionId: string }>();
    

    const { data } = questionQuery.useGetQuestionQuery(Number(id));

    
    return (
        <div className={style.wrapper}>
            <Header/>
            <QuestionCard data={data}/>
            <QuestionFiltersCard data={data}/>
        </div>
    )
}
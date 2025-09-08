import { useNavigate } from "react-router-dom";
import style from './BackButton.module.css' 

export const BackButton = () => {
    const navigate = useNavigate();
    const backHandler = () => {
        navigate(-1);
    };
    return (
        <div onClick={backHandler} className={style.backButton}>
            {'<'}
            <p className={style.backText}>Назад</p>
        </div>
    )
}
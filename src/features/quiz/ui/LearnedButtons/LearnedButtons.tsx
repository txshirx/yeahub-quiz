import { DislikeIcon, LikeIcon } from "@/shared/ui/icons";
import styles from "./LearnedButtons.module.css"
import { useLocalStorage } from "@/shared/hooks";
import { STORAGE_KEYS } from "@/shared/constants";
import { ButtonsState, IsAnsweredStatus } from "../../model/constants";
import type { IsAnsweredStatusType, LearnedButtonState } from "@/shared/config/model/types";

export const LearnedButtons = ({ id } : { id: number }) => {
    const { setStorageValue: setStatus, storageValue: status } = useLocalStorage<LearnedButtonState>(`${STORAGE_KEYS.IS_LEARNED_KEY}_${id}`, { isAnsweredStatus: IsAnsweredStatus.NONE, buttonsState: ButtonsState.NONE })
    const { storageValue: answeredQuestions, setStorageValue: setAnsweredQuestions } = useLocalStorage(STORAGE_KEYS.ANSWERED_QUESTIONS_KEY, 0)
    const { setStorageValue: setPassedQuestions } = useLocalStorage<IsAnsweredStatusType>(`${STORAGE_KEYS.PASSED_QUESTIONS}_${id}`, 'none')

    const handleIsLearned = () => {
        if (status?.isAnsweredStatus !== IsAnsweredStatus.LEARNED) {
            setStatus({ isAnsweredStatus: IsAnsweredStatus.LEARNED, buttonsState: ButtonsState.ACTIVE })
            setPassedQuestions('learned')
        }
        if ((status?.buttonsState !== ButtonsState.ACTIVE) &&  (status?.isAnsweredStatus !== IsAnsweredStatus.LEARNED)) {
            setAnsweredQuestions((answeredQuestions ?? 0) + 1)
        }
    }

    const handleIsNotLearned = () => {
        if (status?.isAnsweredStatus !== IsAnsweredStatus.NOT_LEARNED) {
            setStatus({ isAnsweredStatus: IsAnsweredStatus.NOT_LEARNED, buttonsState: ButtonsState.ACTIVE })
            setPassedQuestions('not_learned')
        }
        if ((status?.buttonsState !== ButtonsState.ACTIVE) &&  (status?.isAnsweredStatus !== IsAnsweredStatus.NOT_LEARNED)) {
            setAnsweredQuestions((answeredQuestions ?? 0) + 1)
        }
    }

    return (
        <div className={styles.buttonsContainer}>
            <button style={status?.isAnsweredStatus === IsAnsweredStatus.NOT_LEARNED ? { backgroundColor: '#f8f6ff', color: '#6A0BFF' } : {}} onClick={() => handleIsNotLearned()} className={styles.learnedButton}>
                <DislikeIcon fill={status?.isAnsweredStatus === IsAnsweredStatus.NOT_LEARNED ? '#6A0BFF' : undefined} />
                <span>Не знаю</span>
            </button>
            <button style={status?.isAnsweredStatus === IsAnsweredStatus.LEARNED ? { backgroundColor: '#f8f6ff', color: '#6A0BFF' } : {}} onClick={() => handleIsLearned()} className={styles.learnedButton}>
                <LikeIcon fill={status?.isAnsweredStatus === IsAnsweredStatus.LEARNED ? '#6A0BFF' : undefined} />
                <span>Знаю</span>
            </button>
        </div>
    );
};
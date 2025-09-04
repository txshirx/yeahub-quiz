import { SkillsButtonIcon } from "@/shared/ui/icons"
import { useState } from "react"
import styles from './FilterButton.module.css'

export const FilterButton = ({ imageSrc, id, title, action } : { imageSrc?: string, id: number, title: string, action?: () => void }) => {
    const [isError, setIsError] = useState(false)

    return (
        <button onClick={() => action ? action() : null} key={id}> 
            {imageSrc && !isError ? 
                (<img 
                    src={imageSrc}
                    onError={() => setIsError(true)}
                    className={styles.filterImage}
                />) 
                : imageSrc ?
                (
                    <SkillsButtonIcon/>
                ) : null
            }
            {title}
        </button>
    )
}
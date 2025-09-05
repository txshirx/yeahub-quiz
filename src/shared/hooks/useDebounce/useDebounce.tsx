import { useEffect, useState } from "react"

export const useDebounce = <T,>(value: T, delay: number = 500) => {
    const [debauncedValue, setDebauncedValue] = useState<T>()
    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebauncedValue(value)
        }, delay)
        return () => clearTimeout(timeout)
    }, [value])

    return debauncedValue
}
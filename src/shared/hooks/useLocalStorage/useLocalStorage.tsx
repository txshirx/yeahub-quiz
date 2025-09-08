import { useEffect, useState } from "react";

export const useLocalStorage = <T,>(key: string, initialValue?: T) => {
    const readValue = () => {
        try {
            const item = localStorage.getItem(key);
            return item ? (JSON.parse(item) as T) : initialValue;
        } catch {
            return initialValue;
        }
    };

    const [storageValue, setStorageValue] = useState<T | undefined>(readValue);

    const updateValue = (newValue: T, newKey?: string) => {
        newKey ? localStorage.setItem(newKey, JSON.stringify(newValue)) : localStorage.setItem(key, JSON.stringify(newValue));
        setStorageValue(newValue);
        window.dispatchEvent(new Event("storage"));
    };

    const getStorageValue = <T,>(newKey: string) => {
        return JSON.parse(localStorage.getItem(newKey) as string) as T
    }

    const clearLocalStorageItem = () => {
        localStorage.removeItem(key);
        setStorageValue(undefined);
        window.dispatchEvent(new Event("storage"));
    };

    const clearLocalStorage = () => {
        localStorage.clear()
    }

    useEffect(() => {
        const handleStorageChange = () => {
            setStorageValue(readValue());
        };

        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, []);

    return { storageValue, setStorageValue: updateValue, clearLocalStorageItem, clearLocalStorage, getStorageValue };
};

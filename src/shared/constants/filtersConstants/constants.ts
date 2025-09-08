import type { ModeType } from "@/shared/config/api/types"

export const COMPLEXITY = {
    '1-3': [1, 2, 3],
    '4-6': [4, 5, 6],
    '7-8': [7, 8],
    '9-10': [9, 10]
} 
export const MODE = {
    1: { value: 'REPEAT', title: 'Повторение' },
    2: { value: 'NEW', title: 'Только новые' },
    3: { value: 'RANDOM', title: 'Случайные  ' } 
}
export const REACT_DEVELOPER_ID = 11
export const DEFAULT_LIMIT_VALUE = 10
export const DEFAULT_MODE: ModeType = 'RANDOM'
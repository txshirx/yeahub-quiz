export type ModeType = 'NEW' | 'REPEAT' | 'RANDOM'

export type FiltersParamsType = {
    limit: number,
    skills: number[],
    complexity: number[],
    mode: ModeType,
    specializations: number,
}


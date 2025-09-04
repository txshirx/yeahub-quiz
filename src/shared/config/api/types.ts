export type ModeType = 'NEW' | 'REPEAT' | 'RANDOM'
export type FiltersParamsType = {
    limit: number,
    skills: string[],
    complexity: number[],
    // mode: ModeType
}
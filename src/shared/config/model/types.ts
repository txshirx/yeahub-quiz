export interface LearnedButtonState {
    isAnsweredStatus: 'none' | 'learned' | 'not_learned',
    buttonsState: 'active' | 'none'
}

export type IsAnsweredStatusType = 'none' | 'learned' | 'not_learned'
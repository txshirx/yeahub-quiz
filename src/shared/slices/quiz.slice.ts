import { createSlice } from "@reduxjs/toolkit"

type QuizType = {
    getNewQuizFlag: boolean
}

const initialState: QuizType = {
    getNewQuizFlag: true
}

export const newQuizSlice = createSlice({
    name: 'newQuiz',
    initialState: initialState,
    reducers: {
        changeQuizFlag: (state) => {
            state.getNewQuizFlag = !state.getNewQuizFlag
        }
    },
    selectors: {
        selectNewQuizFlag: (state) => state.getNewQuizFlag
    }
})
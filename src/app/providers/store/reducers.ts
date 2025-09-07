import { quizFiltersSlice } from "@/features/quizFilters/model/slices/quizFilters.slice";
import { baseApi } from "@/shared/config/api/baseApi";
import { newQuizSlice } from "@/shared/slices/quiz/quiz.slice";
import { combineReducers } from "@reduxjs/toolkit";

export const reducers = combineReducers({
    [baseApi.reducerPath]: baseApi.reducer,
    quizFilters: quizFiltersSlice.reducer,
    newQuiz: newQuizSlice.reducer
})
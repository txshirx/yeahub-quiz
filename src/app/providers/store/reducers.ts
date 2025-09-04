import { quizFiltersSlice } from "@/features/quizFilters/model/quizFilters.slice";
import { baseApi } from "@/shared/config/api/baseApi";
import { combineReducers } from "@reduxjs/toolkit";

export const reducers = combineReducers({
    [baseApi.reducerPath]: baseApi.reducer,
    quizFilters: quizFiltersSlice.reducer
})
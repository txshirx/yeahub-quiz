import { baseApi } from "@/shared/config/api/baseApi";
import type { FiltersParamsType } from "@/shared/config/api/types";

export const quizQuery = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getQuiz: builder.query({
            query: (params: FiltersParamsType) => {
                const filterParams = params ? Object.fromEntries(
                    Object.entries(params).filter(([_, value]) => !(Array.isArray(value) && value.length === 0))
                ) as Partial<FiltersParamsType> : {}

                return {
                    url: '/interview-preparation/quizzes/mock/new',
                    params: filterParams
                }
            },
            providesTags: ['Quiz'] 
        })
    })
})
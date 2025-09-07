import { baseApi } from "@/shared/config/api/baseApi";
import type { Question } from "@/shared/config/api/types";

export const questionQuery = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getQuestion: builder.query<Question, number>({
            query: (id) => `/questions/public-questions/${id}`,
            providesTags: (res, err, id) => [{ type: 'Question', id}]
        })
    })
})
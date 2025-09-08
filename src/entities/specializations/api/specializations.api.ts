import { baseApi } from "@/shared/config/api/baseApi";
import type { SpecializationsType } from "../model/types";

export const specializationsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getSpecializations: builder.query<{ data: SpecializationsType[] }, void>({
            query: () => '/specializations',
            providesTags: ['Specializations']
        }),
    }),
    overrideExisting: false
})
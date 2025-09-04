import { baseApi } from "@/shared/config/api/baseApi";
import type { SkillsType, SpecializationsType } from "./types";

export const filtersApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getSkills: builder.query<{ data: SkillsType[] }, void>({
            query: () => '/skills',
            providesTags: ['Skills']
        }),
        getSpecializations: builder.query<{ data: SpecializationsType[] }, void>({
            query: () => '/specializations',
            providesTags: ['Specializations']
        }),
    }),
    overrideExisting: false
})
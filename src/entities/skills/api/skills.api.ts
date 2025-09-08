import { baseApi } from "@/shared/config/api/baseApi";
import type { SkillsType } from "../model/types";

export const skillsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getSkills: builder.query<{ data: SkillsType[] }, void>({
            query: () => '/skills',
            providesTags: ['Skills']
        }),
    }),
    overrideExisting: false
})
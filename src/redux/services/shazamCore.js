import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Processor } from 'postcss';

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', process.env.VITE_SHAZAM_CORE_RAPID_API_KEY);
            return headers;
        }
    }),

    endpoints: (builder) => ({
        getTopCharts: builder.query({
            query: () => 'charts/world'
        })
    })
})

export const { useGetTopChartsQuery } = shazamCoreApi;
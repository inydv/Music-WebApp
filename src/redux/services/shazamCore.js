import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY);
            return headers;
        }
    }),

    endpoints: (builder) => ({
        getTopCharts: builder.query({
            query: () => 'charts/world'
        }),
        getSongDetails: builder.query({
            query: ({ songid }) => `/tracks/details?track_id=${songid}`
        }),
        getSongRelated: builder.query({
            query: ({ songid }) => `/tracks/related?track_id=${songid}`
        }),
        getArtistRelated: builder.query({
            query: (artistId) => `/artists/details?artist_id=${artistId}`
        }),
        getSongsByCountry: builder.query({
            query: (countryCode) => `/charts/country?country_code=${countryCode}`
        })
    })
})

export const { useGetTopChartsQuery, useGetSongDetailsQuery, useGetSongRelatedQuery, useGetArtistRelatedQuery, useGetSongsByCountryQuery } = shazamCoreApi;
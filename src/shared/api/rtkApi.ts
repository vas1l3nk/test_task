import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const TAGS = ['Note'];

export const rtkApi = createApi({
    reducerPath: 'api',
    tagTypes: TAGS,
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/',
    }),
    endpoints: () => ({}),
});

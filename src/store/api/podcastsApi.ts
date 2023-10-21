// const useGetAllPodcasts = (limit = 100, genre = '1310') => {
//     const url = `https://itunes.apple.com/us/rss/toppodcasts/limit=${limit}/genre=${genre}/json`;

import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQuery } from '@store/api';

import {
  type IPodcastsArgsType,
  type PodcastsCollection,
  type PodcastsResponse,
} from '../../types/podcasts.types';

export const podcastsApi = createApi({
  reducerPath: 'podcastsApi',
  baseQuery,
  endpoints: (builder) => ({
    getPodcasts: builder.query<
      PodcastsCollection[] | undefined,
      IPodcastsArgsType
    >({
      query: ({ limit = 100, genre = 1310 }) =>
        `toppodcasts/limit=${limit}/genre=${genre}/json`,
      transformResponse: (response: PodcastsResponse) => {
        return response.feed.entry;
      },
    }),
  }),
});

export const { useGetPodcastsQuery } = podcastsApi;

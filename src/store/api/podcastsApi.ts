// const useGetAllPodcasts = (limit = 100, genre = '1310') => {
//     const url = `https://itunes.apple.com/us/rss/toppodcasts/limit=${limit}/genre=${genre}/json`;

import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQuery } from '@store/api';

import {
  type IPodcastDetailArgsType,
  type IPodcastsArgsType,
  type PodcastsCollection,
  type PodcastsResponse,
  type PodcastResponse,
  type PodcastDetail,
  type Episode,
} from '../../types/podcasts.types';
import { dateFormat, millisToMinutes } from '../../utils';

export const podcastsApi = createApi({
  reducerPath: 'podcastsApi',
  baseQuery,
  keepUnusedDataFor: 600, // save cached data 10 minutes
  endpoints: (builder) => ({
    getPodcasts: builder.query<
      PodcastsCollection[] | undefined,
      IPodcastsArgsType
    >({
      query: ({ limit = 100, genre = 1310 }) =>
        `us/rss/toppodcasts/limit=${limit}/genre=${genre}/json`,
      transformResponse: (response: PodcastsResponse) => {
        console.log('response', response);
        return response.feed.entry.map((podcast) => ({
          id: podcast.id.attributes['im:id'],
          title: podcast.title.label,
          imageSrc: {
            imageMin: podcast['im:image'][0].label,
            imageMax: podcast['im:image'][podcast['im:image'].length - 1].label,
          },
          imageName: podcast['im:name'].label,
          description: podcast.summary.label,
          artistName: podcast['im:artist'].label,
        }));
      },
    }),
    getPodcastById: builder.query<PodcastDetail | null, IPodcastDetailArgsType>(
      {
        query: ({ id }) =>
          `https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`,
        transformResponse: (response: PodcastResponse) => {
          const episodes: Episode[] = response.results
            .filter((item) => item.kind === 'podcast-episode')
            .map((episode) => ({
              id: episode.trackId,
              name: episode.trackName,
              date: dateFormat(episode.releaseDate),
              duration: millisToMinutes(episode.trackTimeMillis),
              description: episode?.description,
              trackViewUrl: episode.trackViewUrl,
              episodeUrl: episode.episodeUrl,
              episodeType: `${episode.episodeContentType}/${episode.episodeFileExtension}`,
            }));

          const podcastInfo = response.results.find(
            (item) => item.kind === 'podcast',
          );

          if (!podcastInfo) return null;

          const podcast: PodcastDetail = {
            id: podcastInfo.collectionId.toString(),
            imageSrc: {
              imageMin: podcastInfo.artworkUrl100,
              imageMax: podcastInfo.artworkUrl600,
            },
            artistName: podcastInfo.artistName,
            collectionName: podcastInfo.collectionName,
            episodes,
          };
          return podcast;
        },
      },
    ),
  }),
});

export const { useGetPodcastsQuery, useGetPodcastByIdQuery } = podcastsApi;

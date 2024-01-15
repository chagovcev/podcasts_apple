import { createSlice } from '@reduxjs/toolkit';

import { type PodcastsCollection } from '../../../../types/podcasts.types';

interface IInitialState {
  allPodcasts: PodcastsCollection[];
  filteredPodcasts: PodcastsCollection[];
}

const initialState: IInitialState = {
  allPodcasts: [],
  filteredPodcasts: [],
};

export const podcastsSlice = createSlice({
  name: 'podcasts',
  initialState,
  reducers: {
    setPodcasts: (state, action) => {
      state.allPodcasts = action.payload;
      state.filteredPodcasts = action.payload;
    },
    filterPodcasts: (state, action) => {
      const key = action.payload.toLowerCase();

      state.filteredPodcasts = state.allPodcasts.filter(
        (podcast) =>
          podcast.title.toLowerCase().includes(key) ||
          podcast.artistName.toLowerCase().includes(key),
      );
    },
  },
});

export const { setPodcasts, filterPodcasts } = podcastsSlice.actions;

export default podcastsSlice.reducer;

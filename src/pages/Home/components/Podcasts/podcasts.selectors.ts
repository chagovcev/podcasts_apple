import { type RootState } from '@store';

export const podcastsSelectors = (state: RootState) =>
  state.podcasts.filteredPodcasts;

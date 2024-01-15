import { type FC } from 'react';

import { PodcastItem } from '@pages/Home/components';

import { type PodcastsCollection } from '../../../../types/podcasts.types';

import s from './Podcasts.module.scss';

interface IPodcasts {
  podcasts: PodcastsCollection[] | undefined;
}

const Podcasts: FC<IPodcasts> = ({ podcasts }) => {
  if (!podcasts) return null;

  return (
    <div className={s.podcasts}>
      {podcasts.map((podcast) => (
        <PodcastItem key={podcast.id} podcast={podcast} />
      ))}
    </div>
  );
};

export default Podcasts;

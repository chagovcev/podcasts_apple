import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { type PodcastsCollection } from '../../../../types/podcasts.types';

import s from './PodcastItem.module.scss';

interface IPodcast {
  podcast: PodcastsCollection;
}

const PodcastItem: FC<IPodcast> = ({ podcast }) => {
  const isDevelopment = process.env.NODE_ENV === 'development';

  const { imageMin, imageMax } = podcast.imageSrc;

  const imageSrc = !isDevelopment ? imageMin : imageMax;

  const navigate = useNavigate();

  const handlePodcastClick = () => {
    navigate(`/podcast/${podcast.id}`, {
      state: { description: podcast.description },
    });
  };

  return (
    <div className={s.podcast_item}>
      <button
        type="button"
        className={s.podcast_content}
        onClick={handlePodcastClick}
      >
        <img
          src={imageSrc}
          alt={podcast.imageName}
          className={s.podcast_image}
        />
        <div className={s.podcast_title}>{podcast.imageName}</div>
        <div className={s.podcast_author}>{podcast.artistName}</div>
      </button>
    </div>
  );
};

export default PodcastItem;

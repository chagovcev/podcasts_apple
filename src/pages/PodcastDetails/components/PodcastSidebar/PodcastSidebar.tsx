import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import cx from 'classnames';

import { type PodcastDetail } from '../../../../types/podcasts.types';

import s from './PodcastSidebar.module.scss';

interface IPodcastSideBar {
  podcast: PodcastDetail;
  description: string;
}

const PodcastSidebar: FC<IPodcastSideBar> = ({ podcast, description }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/podcast/${podcast.id}`, {
      state: { description },
    });
  };

  const isDevelopment = process.env.NODE_ENV === 'development';

  const { imageMin, imageMax } = podcast.imageSrc;

  const imageSrc = !isDevelopment ? imageMin : imageMax;

  return (
    <>
      <div className={s.podcast_sb__item}>
        <div className={s.podcast_sb__image}>
          <img src={imageSrc} alt={podcast.artistName} />
        </div>
      </div>
      <div className={s.podcast_sb__item}>
        <button
          type="button"
          className={cx(s.podcast_sb__title, 'main-subtitle')}
          onClick={handleClick}
        >
          {podcast.collectionName}
        </button>
        <button
          type="button"
          className={cx(s.podcast_sb__subtitle, 'main-description')}
          onClick={handleClick}
        >
          by {podcast.artistName}
        </button>
      </div>
      <div className={s.podcast_sb__item}>
        <div className="main-subtitle">Description:</div>
        <div className="main-description">{description}</div>
      </div>
    </>
  );
};

export default PodcastSidebar;

import { useLocation, useParams } from 'react-router-dom';
import { type FC, useMemo } from 'react';
import cx from 'classnames';

import { PodcastSidebar } from '@pages/PodcastDetails/components';
import { AudioPlayer } from '@pages/EpisodeDetail/components';

import { useGetPodcastByIdQuery } from '@store/api';

import { MainLayout } from '../../layouts';
import { type Episode } from '../../types/podcasts.types';

import s from './EpisodeDetail.module.scss';

const EpisodeDetail: FC = () => {
  const { podcastId, episodeId } = useParams();
  const {
    state: { description },
  } = useLocation();

  if (!podcastId) return null;

  const {
    data: podcast,
    isLoading,
    isError,
  } = useGetPodcastByIdQuery({ id: podcastId });

  const episode: Episode | undefined = useMemo(() => {
    if (!podcast) return undefined;

    return podcast.episodes.find(
      (episodeItem) => episodeItem.id === Number(episodeId),
    );
  }, [podcast, episodeId]);

  return (
    <MainLayout isLoading={isLoading} isError={isError}>
      {podcast && episode && (
        <div className={s.episode}>
          <div className={cx('block', s.episode_podcast_info)}>
            <PodcastSidebar podcast={podcast} description={description} />
          </div>
          <div className={s.episode_info}>
            <div className="block">
              <div className={s.episode_info__item}>
                <div className="main-title">{episode.name}</div>
                {episode.description && (
                  <div
                    className={cx(s.episode__description, 'main-description')}
                    dangerouslySetInnerHTML={{ __html: episode.description }}
                  />
                )}
              </div>
              <div className={s.episode_info__item}>
                <AudioPlayer
                  source={episode.episodeUrl}
                  type={episode.episodeType}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default EpisodeDetail;

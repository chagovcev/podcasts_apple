import { Link, useLocation, useParams } from 'react-router-dom';
import cx from 'classnames';

import { PodcastSidebar } from '@pages/PodcastDetails/components';

import { useGetPodcastByIdQuery } from '@store/api';

import { MainLayout } from '../../layouts';

import s from './PodcastDetails.module.scss';

const PodcastDetails = () => {
  const { podcastId } = useParams();
  const {
    state: { description },
  } = useLocation();

  if (!podcastId) return null;

  const {
    data: podcast,
    isLoading,
    isError,
  } = useGetPodcastByIdQuery({ id: podcastId });

  return (
    <MainLayout isLoading={isLoading} isError={isError}>
      {podcast && (
        <div className={s.podcast}>
          <div className={cx(s.podcast_info, 'block')}>
            <PodcastSidebar podcast={podcast} description={description} />
          </div>
          <div className={s.podcast_episodes_info}>
            <div className="block">Episodes: {podcast.episodes.length}</div>
            <div className={cx(s.podcast_episodes, 'block')}>
              <table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Date</th>
                    <th>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {podcast.episodes.map((episode) => (
                    <tr key={episode.id}>
                      <td>
                        <Link
                          to={`/podcast/${podcastId}/episode/${episode.id}`}
                        >
                          {episode.name}
                        </Link>
                      </td>
                      <td>{episode.date}</td>
                      <td>{episode.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default PodcastDetails;

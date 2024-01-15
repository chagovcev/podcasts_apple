import { type FC, useEffect } from 'react';

import { Heading, SearchBar } from '@components';

import { Podcasts, setPodcasts } from '@pages/Home/components';
import { podcastsSelectors } from '@pages/Home/components/Podcasts/podcasts.selectors';

import { useGetPodcastsQuery } from '@store/api/podcastsApi';
import { useAppDispatch, useAppSelector } from '@store/hooks';

import { MainLayout } from '../../layouts';

import s from './Home.module.scss';

const Home: FC = () => {
  const dispatch = useAppDispatch();

  const podcasts = useAppSelector(podcastsSelectors);

  const { data, isLoading, isError } = useGetPodcastsQuery({
    limit: undefined,
    genre: undefined,
  });

  useEffect(() => {
    if (!data) return;
    dispatch(setPodcasts(data));
  }, [data]);

  return (
    <MainLayout isLoading={isLoading} isError={isError}>
      <div className={s.home}>
        <div className={s.home__header}>
          <div className={s.home__header_group}>
            <Heading level="2" fontWeight="600">
              {podcasts?.length}
            </Heading>
            <SearchBar />
          </div>
        </div>
        <Podcasts podcasts={podcasts} />
      </div>
    </MainLayout>
  );
};

export default Home;

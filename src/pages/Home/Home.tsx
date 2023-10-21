import { type FC } from 'react';

import { Heading, SearchBar } from '@components';

import { useGetPodcastsQuery } from '@store/api/podcastsApi';

import { MainLayout } from '../../layouts';

import s from './Home.module.scss';

const Home: FC = () => {
  const {
    data: podcasts,
    isLoading,
    isError,
  } = useGetPodcastsQuery({ limit: undefined, genre: undefined });

  const handleChangeSearchBar = (value: string) => {
    console.log(value);
  };

  return (
    <MainLayout isLoading={isLoading} isError={isError}>
      <div className={s.home}>
        <div className={s.home__header}>
          <div className={s.home__header_group}>
            <Heading level="2" fontWeight="600">
              {podcasts?.length}
            </Heading>
            <SearchBar onChange={handleChangeSearchBar} />
          </div>
        </div>
        <div className={s.home__content}>
          {/* {allPodcasts.map((podcast) => ( */}
          {/*    <PodcastItem */}
          {/*        key={podcast.id.attributes['im:id']} */}
          {/*        podcast={podcast} */}
          {/*    /> */}
          {/* ))} */}
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;

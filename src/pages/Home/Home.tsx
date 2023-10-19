import { type FC } from 'react';

import { Button } from '@components';

import { useAppDispatch, useAppSelector } from '@store/hooks';
import { useGetTodosQuery } from '@store/api';

import { currentThemeSelector, toggleTheme } from '@features/themes';

import { MainLayout } from '../../layouts';

import styles from './Home.module.scss';

const Home: FC = () => {
  const currentTheme = useAppSelector(currentThemeSelector);
  const dispatch = useAppDispatch();

  const { data, isLoading, isError } = useGetTodosQuery(undefined);

  const handleChangeTheme = () => {
    dispatch(toggleTheme());
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong</p>;

  console.log('todos ', data);

  return (
    <MainLayout isLoading={isLoading}>
      <div className={styles.home_page}>
        <h1 className={styles.home_page__title}> This is a Home page</h1>

        <p className={styles.home_page__paragraph}>
          Now is <b>{currentTheme}</b> theme.
        </p>

        <Button
          type="button"
          onClick={handleChangeTheme}
          label="Change theme"
        />
      </div>
    </MainLayout>
  );
};

export default Home;

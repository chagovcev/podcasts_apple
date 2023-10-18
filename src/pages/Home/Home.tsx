import { type FC } from 'react';

import { Button } from '@components';

import { useAppDispatch, useAppSelector } from '@store/hooks';
import { useGetTodosQuery } from '@store/api';

import { currentThemeSelector, toggleTheme } from '@features/themes';

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
    <div className={styles.home_page}>
      <h1 className={styles.home_page__title}> This is a Home page</h1>

      <p className={styles.home_page__paragraph}>
        Now is <b>{currentTheme}</b> theme.
      </p>

      <Button type="button" onClick={handleChangeTheme} label="Change theme" />
    </div>
  );
};

export default Home;

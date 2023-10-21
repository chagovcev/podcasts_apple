import { Link } from 'react-router-dom';
import { type FC } from 'react';
import Switch from 'react-switch';

import { useAppDispatch, useAppSelector } from '@store/hooks';

import { Loader } from '@components/Loader';
import { Body, Heading } from '@components/typography';
import { currentThemeSelector, THEMES, toggleTheme } from '@features/themes';

import s from './Header.module.scss';

interface IHeader {
  isLoading?: boolean;
}

const Header: FC<IHeader> = ({ isLoading }) => {
  const currentTheme = useAppSelector(currentThemeSelector);
  const dispatch = useAppDispatch();

  const handleChangeTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className={s.header}>
      <Link to="/">
        <Heading level="1" fontWeight="700">
          Podcaster{'  '}
        </Heading>
      </Link>
      <div>
        {isLoading && <Loader />}

        <div className={s.theme_switcher}>
          <Body>Change Theme</Body>
          <Switch
            onChange={handleChangeTheme}
            checked={currentTheme === THEMES.DARK}
            offColor={'#1d1d1e'}
            onColor={'#adadad'}
            uncheckedIcon={false}
            checkedIcon={false}
            height={28}
            width={56}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

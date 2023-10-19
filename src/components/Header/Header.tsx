import { Link } from 'react-router-dom';
import { type FC } from 'react';

import { Loader } from '@components/Loader';
import { Heading } from '@components/typography';

import s from './Header.module.scss';

interface IHeader {
  isLoading: boolean;
}

const Header: FC<IHeader> = ({ isLoading }) => {
  return (
    <div className={s.header}>
      <Link to="/">
        <Heading level="1" fontWeight="700">
          Podcaster{' '}
        </Heading>
      </Link>
      {isLoading && <Loader />}
    </div>
  );
};

export default Header;

// import { ErrorMessage } from '../../components';

import { type FC, type PropsWithChildren } from 'react';

import { Body, Header } from '@components';

import s from './MainLayout.module.scss';

interface IMainLayout {
  isLoading?: boolean;
  isError?: boolean;
}

const MainLayout: FC<PropsWithChildren<IMainLayout>> = ({
  children,
  isLoading,
  isError,
}) => {
  return (
    <div className={s.layout}>
      <Header isLoading={isLoading} />
      <div className={s.container}>
        <div className={s.content}>
          {isError && <Body>Something went wrong!</Body>}
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;

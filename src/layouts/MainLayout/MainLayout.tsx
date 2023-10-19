// import { ErrorMessage } from '../../components';

import { type FC, type PropsWithChildren } from 'react';

import { Header } from '@components';

import s from './MainLayout.module.scss';

interface IMainLayout {
  isLoading: boolean;
  error?: string;
}

const MainLayout: FC<PropsWithChildren<IMainLayout>> = ({
  children,
  isLoading,
  error,
}) => {
  return (
    <div className={s.container}>
      <Header isLoading={isLoading} />
      <div className={s.content}>
        {/* {error ? <ErrorMessage error={error} /> : children} */}
        {children}
      </div>
    </div>
  );
};

export default MainLayout;

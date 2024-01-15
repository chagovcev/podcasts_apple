import { type FC, useMemo } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Home, PodcastDetails } from '@pages';

const App: FC = () => {
  const router = useMemo(
    () =>
      createBrowserRouter([
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/podcast/:podcastId',
          element: <PodcastDetails />,
        },
      ]),
    [],
  );

  return <RouterProvider router={router} />;
};

export default App;

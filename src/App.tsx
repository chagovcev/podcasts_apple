import { type FC, useMemo } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { EpisodeDetail, Home, PodcastDetails } from '@pages';

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
        {
          path: '/podcast/:podcastId/episode/:episodeId',
          element: <EpisodeDetail />,
        },
      ]),
    [],
  );

  return <RouterProvider router={router} />;
};

export default App;

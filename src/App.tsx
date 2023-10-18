import { type FC, useMemo } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Home } from '@pages';

const App: FC = () => {
  const router = useMemo(
    () =>
      createBrowserRouter([
        {
          path: '/',
          element: <Home />,
        },
      ]),
    [],
  );

  return <RouterProvider router={router} />;
};

export default App;

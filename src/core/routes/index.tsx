import { Suspense, lazy } from 'react';
import { Navigate, Outlet, useRoutes } from 'react-router-dom';

import ProgressBar from '@components/ProgressBar';

// ----------------------------------------------------------------------

const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) =>
  (
    <Suspense fallback={<ProgressBar />}>
      <Component {...props} />
    </Suspense>
  );

// ----------------------------------------------------------------------

const Home = Loadable(lazy(() => import('../../app/pages/Home')));

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    // Auth Routes
    {
      path: 'auth',
      element: <div>auth</div>
    },

    // Dashboard Routes
    {
      path: 'dashboard',
      element: <div>dashboard</div>
    },

    // Main Routes
    {
      path: '/',
      element: <Outlet />,
      children: [
        { element: <Home />, index: true },
        { path: '404', element: <div>Page Not Found</div> },
        { path: '*', element: <Navigate to="/404" replace /> }
      ]
    },
    { path: '*', element: <div>Page Not Found</div> }
  ]);
}

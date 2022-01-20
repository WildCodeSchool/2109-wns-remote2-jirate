import { Navigate, useRoutes } from 'react-router-dom';

// layouts
import DashboardLayout from '../../layouts/dashboard';

// pages
import Project from '../../components/pages/Project/Project';
import Error404 from '../../components/pages/Error404/Error404';

const Router = () => {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [{ element: <Navigate to="/dashboard/app" replace /> }, { path: 'app', element: <Project /> }],
    },
    {
      path: '/',
      element: null,
      children: [
        //     { path: 'login', element: <Login /> },
        //     { path: 'register', element: <Register /> },
        { path: '404', element: <Error404 /> },
        { path: '/', element: <Navigate to="/dashboard" /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
};

export default Router;

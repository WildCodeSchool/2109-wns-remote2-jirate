import { Navigate, useRoutes } from 'react-router-dom';

// layouts
import DashboardLayout from '../../layouts/dashboard';

// pages
import Project from '../../components/pages/Project/Project';
import Error404 from '../../components/pages/Error404/Error404';
import HomePage from '../../components/pages/HomePage/HomePage';
import Login from '../../components/pages/Login/Login';
import Register from "../../components/pages/Register/Register";

const Router = () => {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" replace /> },
        { path: 'app', element: <HomePage /> },
        { path: 'projects', element: <Project /> },
      ],
    },
    {
      path: '/',

      // element: null,
      children: [
        { path: 'login', element: <Login /> },
            { path: 'register', element: <Register /> },
        { path: '404', element: <Error404 /> },
        { path: '/', element: <Navigate to="/dashboard" /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
};

export default Router;

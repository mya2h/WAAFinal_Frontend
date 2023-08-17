import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import Job from './pages/Job';
import UserPage from './pages/UserPage';
import User from './pages/User';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import Event from './pages/Event';
import DashboardAppPage from './pages/DashboardAppPage';
import Profile from './pages/Profile';
import NewsAndAnnouncements from './pages/News';
// ----------------------------------------------------------------------

export default function Router() {
  const role = localStorage.getItem('role');
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to={role === 'admin'?'/dashboard/app':'/dashboard/blog'} />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'user', element: <User /> },
        { path: 'products', element: <Event /> },
        { path: 'blog', element: <Job /> },
        {path: 'profile',element:<Profile/>},
        {path:'newsandannouncements',element:<NewsAndAnnouncements/>}
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    // 
    {
      element: <SimpleLayout />,
      children: [
        { element:  <Navigate to={role?role === 'admin'?'/dashboard/app':'/dashboard/blog':'/login'} />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}

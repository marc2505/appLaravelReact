
import {createBrowserRouter, Navigate} from 'react-router-dom';
import AdminLayout from './components/AdminLayout';
import DefaultLayout from './components/DefaultLayout';
import GuestLayout from './components/GuestLayout';
import Dashboard from './views/Dashboard';
import DashboardAdmin from './views/DashboardAdmin';
import GestionEvents from './views/GestionEvents';
import GestionUsers from './views/GestionUsers';
import Home from './views/Home';
import Login from './views/Login';
import LoginAdmin from './views/LoginAdmin';
import NotFound from './views/NotFound';
import Profile from './views/Profile';
import Signup from './views/Signup';
import UserForm from './views/UserForm';
import Users from './views/Users';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/',
        element: <GuestLayout/>,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup/>
            },
        ]
    },
    {
        path: '/',
        element: <DefaultLayout/>,
        children: [
            {
                path: '/',
                element: <Navigate to='/dashboard' />
            },
            {
                path: '/dashboard',
                element: <Dashboard/>
            },
            {
                path: '/profile',
                element: <Profile />
            },
            {
                path: '/users',
                element: <Users/>
            },
            {
                path: '/users/new',
                element: <UserForm key='userCreate' />
            },
            {
                path: '/users/:id',
                element: <UserForm key='userUpdate' />
            }
        ]
    },
    {
        path: '/admin',
        element: <LoginAdmin />
    },
    {
        path: '/admin',
        element: <AdminLayout/>,
        children: [
            {
                path: '/admin/dashboard',
                element: <DashboardAdmin />
            },
            {
                path: '/admin/users',
                element: <GestionUsers />
            },
            {
                path: '/admin/events',
                element: <GestionEvents />
            }
        ]
    },
    {
        path: '/*',
        element: <NotFound/>
    },
]);

export default router;
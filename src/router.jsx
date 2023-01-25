import { Children } from 'react';
import {createBrowserRouter, Navigate} from 'react-router-dom';
import AdminLayout from './components/AdminLayout';
import DefaultLayout from './components/DefaultLayout';
import GuestLayout from './components/GuestLayout';
import Dashboard from './views/Dashboard';
import Datshboard from './views/Dashboard';
import DashboardAdmin from './views/Admin/DashboardAdmin';
import Home from './views/FrontEnd/Home';
import Login from './views/Login';
import LoginAdmin from './views/Admin/LoginAdmin';
import NotFound from './views/NotFound';
import Profile from './views/Profile';
import Signup from './views/Signup';
import UserForm from './views/UserForm';
import Users from './views/Users';

const router = createBrowserRouter([
    {
        path: '/',
        element: <GuestLayout/>,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/home',
                element: <Home />
            },
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
                element: <Navigate to='/users'/>
            },
            {
                path: '/dashboard',
                element: <Dashboard/>
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
                path: '/admin/login',
                element: <LoginAdmin />
            },
            {
                path: '/admin/dashboard',
                element: <DashboardAdmin />
            }
        ]
    },
    {
        path: '/*',
        element: <NotFound/>
    },
]);

export default router;
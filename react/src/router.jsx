import { Children } from 'react';
import {createBrowserRouter, Navigate} from 'react-router-dom';
import AdminLayout from './components/AdminLayout';
import DefaultLayout from './components/DefaultLayout';
import GuestLayout from './components/GuestLayout';
import Datshboard from './views/Datshboard';
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
        element: <DefaultLayout/>,
        children: [
            {
                path: '/',
                element: <Navigate to='/users'/>
            },
            {
                path: '/dashboard',
                element: <Datshboard/>
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
        path: '/',
        element: <GuestLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            // {
            //     path: '/login',
            //     element: <Login />
            // },
            {
                path: '/signup',
                element: <Signup/>
            },
        ]
    },
    {
        path: '/*',
        element: <NotFound/>
    },
]);

export default router;
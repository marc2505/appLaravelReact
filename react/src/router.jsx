
import {createBrowserRouter, Navigate} from 'react-router-dom';
import AdminLayout from './components/AdminLayout';
import DefaultAdminLayout from './components/DefaultAdminLayout';
import DefaultLayout from './components/DefaultLayout';
import GuestAdminLayout from './components/GuestAdminLayout';
import GuestLayout from './components/GuestLayout';
import AjoutCategorie from './views/AjoutCategorie';
import AjoutPrestation from './views/AjoutPrestation';
import CategoryForm from './views/CategoryForm';
import Dashboard from './views/Dashboard';
import DashboardAdmin from './views/DashboardAdmin';
import FileUpload from './views/FileUpload';
import GestionCategories from './views/GestionCategories';
import GestionEvents from './views/GestionEvents';
import GestionUsers from './views/GestionUsers';
import Home from './views/Home';
import Login from './views/Login';
import LoginAdmin from './views/LoginAdmin';
import NotFound from './views/NotFound';
import Prestation from './views/Prestation';
import PrestationForm from './views/PrestationForm';
import Profile from './views/Profile';
import Search from './views/Search';
import ShowPrestation from './views/ShowPrestation';
import Signup from './views/Signup';
import UserForm from './views/UserForm';
import Users from './views/Users';

const router = createBrowserRouter([
    // {
    //     path: '/',
    //     element: <Home />
    // },
    // {
    //     path: '/home',
    //     element: <Home />
    // },
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/search',
        element: <Search />
    },
    {
        path: '/prestation',
        element: <Prestation />
    },
    {
        path: '/',
        element: <GuestLayout/>,
        children: [
            // {
            //     path: '/',
            //     element: <Home />
            // },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup/>
            }
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
            },
        ]
    },
    // {
    //     path: '/admin',
    //     element: <LoginAdmin />
    // },
    {
        path: '/admin',
        element: <GuestAdminLayout />,
        children: [
            {
                path: '/admin',
                element: <LoginAdmin />
            }
        ]
    },
    {
        path: '/admin',
        element: <DefaultAdminLayout />,
        children: [
            {
                path: '/admin',
                element: <Navigate to='/admin/users' />
            },
            {
                path: '/admin/users',
                element: <GestionUsers />
            },
            {
                path: '/admin/users/new',
                element: <UserForm key='userCreate' />
            },
            {
                path: '/admin/users/:id',
                element: <UserForm key='userUpdate' />
            },
            {
                path: '/admin/events',
                element: <GestionEvents />
            },
            {
                path: '/admin/users/:id/addPrestation',
                element: <AjoutPrestation />
            },
            {
                path: '/admin/users/:id/showPrestation',
                element: <ShowPrestation />
            },
            {
                path: '/admin/prestation/:idParam',
                element: <PrestationForm />
            },
            {
                path: '/admin/categories',
                element: <GestionCategories />
            },
            {
                path: '/admin/categories/new',
                element: <AjoutCategorie />
            },
            {
                path: '/admin/categories/:idParam',
                element: <CategoryForm />
            },
            {
                path: '/admin/filesUpload',
                element: <FileUpload />
            }
        ]
    },
    // {
    //     path: '/admin',
    //     element: <LoginAdmin />
    // },
    // {
    //     path: '/admin/home',
    //     element: <LoginAdmin />
    // },
    // {
    //     path: '/admin',
    //     element: <GuestAdminLayout />,
    //     children: [
    //         {
    //             path: '/admin/login',
    //             element: <LoginAdmin />
    //         }
    //     ]
    // },
    // {
    //     path: '/admin',
    //     element: <DefaultAdminLayout />,
    //     children: [
    //         {
    //             path: '/admin',
    //             element: <Navigate to='/admin/users' />
    //         },
    //         {
    //             path: '/admin/users',
    //             element: <GestionUsers />
    //         },
    //         {
    //             path: '/admin/users/new',
    //             element: <UserForm key='userCreate' />
    //         },
    //         {
    //             path: '/admin/users/:id',
    //             element: <UserForm key='userUpdate' />
    //         },
    //         {
    //             path: '/admin/events',
    //             element: <GestionEvents />
    //         },
    //         {
    //             path: '/admin/users/:id/addPrestation',
    //             element: <AjoutPrestation />
    //         },
    //         {
    //             path: '/admin/users/:id/showPrestation',
    //             element: <ShowPrestation />
    //         },
    //         {
    //             path: '/admin/prestation/:idParam',
    //             element: <PrestationForm />
    //         }
    //     ]
    // },
    // {
    //     path: '/admin',
    //     element: <AdminLayout/>,
    //     children: [
    //         // {
    //         //     path: '/admin/dashboard',
    //         //     element: <DashboardAdmin />
    //         // },
    //         // {
    //         //     path: '/admin',
    //         //     element: <Navigate to={'/admin/users'} />
    //         // },
    //         {
    //             path: '/admin/users',
    //             element: <GestionUsers />
    //         },
    //         {
    //             path: '/admin/users/new',
    //             element: <UserForm key='userCreate' />
    //         },
    //         {
    //             path: '/admin/users/:id',
    //             element: <UserForm key='userUpdate' />
    //         },
    //         {
    //             path: '/admin/events',
    //             element: <GestionEvents />
    //         },
    //         {
    //             path: '/admin/users/:id/addPrestation',
    //             element: <AjoutPrestation />
    //         },
    //         {
    //             path: '/admin/users/:id/showPrestation',
    //             element: <ShowPrestation />
    //         },
    //         {
    //             path: '/admin/prestation/:idParam',
    //             element: <PrestationForm />
    //         }
    //     ]
    // },
    {
        path: '/*',
        element: <NotFound/>
    },
]);

export default router;
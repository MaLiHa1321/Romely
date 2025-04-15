import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Component/home/Home';
import Root from './Component/Root/Root';
import BannerNext from './Component/home/BannerNext';
import Login from './Component/Authentication/Login';
import Signup from './Component/Authentication/Signup';
import AuthProvider from './provider/AuthProvider';
import PrivatwRoute from './provider/PrivatwRoute';
import Profile from './Component/Layout/Profile';
import Destination from './Component/Layout/Destination';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/BannerNext',
        element: <BannerNext />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/profile',
        element: <PrivatwRoute>
          <Profile></Profile>
        </PrivatwRoute>
      },
      {
        path: '/destination',
        element: <PrivatwRoute>
         <Destination></Destination>
        </PrivatwRoute>
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

 <AuthProvider>

    <RouterProvider router={router} />
 </AuthProvider>


  </StrictMode>,
)

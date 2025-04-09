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

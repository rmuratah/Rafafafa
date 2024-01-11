import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './presentation/pages/app/App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './presentation/styles/index.css';
import Login from './presentation/pages/login/login'
import Profile from './presentation/pages/profile/profile'

const router = createBrowserRouter([

    {
        path: '/',
        element: <App />,

        children: [
            {
                path: "/",
                element: <Login />
            },
            {
                path: "profile",
                element: <Profile />
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)

reportWebVitals();

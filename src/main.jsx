import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import App from './App.jsx' 
import PrivateRoute from './PrivateRoute.jsx'

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Contact from "./pages/Contact.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                path: "/",
                element: <PrivateRoute><Home /></PrivateRoute>,
            },
            {
                path: "login", 
                element: <Login />,
            },
            {
                path: "contact",
                element: <PrivateRoute><Contact /></PrivateRoute>,
            },
       
        ],
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
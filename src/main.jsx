import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AuthProvider } from './context/AuthProvider.jsx'

import App from './App.jsx' 
import PrivateRoute from './PrivateRoute.jsx'

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Contact from "./pages/Contact.jsx";
import Blog from "./pages/Blog.jsx";
import Logout from "./pages/Logout.jsx";
import ArticleDetails from "./pages/ArticleDetails.jsx";

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
                path: "logout",
                element: <Logout />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "blog",
                element: <Blog />,
            },
            {
                path: "article/:id",
                element: <ArticleDetails />,
            }
       
        ],
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </StrictMode>,
)
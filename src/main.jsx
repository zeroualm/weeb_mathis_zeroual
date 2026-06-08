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
import ForgotPassword from "./pages/ForgotPassword.jsx";
import Signup from './pages/Signup.jsx'
import CreateArticle from './pages/CreateArticle.jsx'
import ResetPassword from './pages/ResetPassword.jsx'

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
                path: "signup",
                element: <Signup />,
            },
            {
                path: "forgot-password",
                element: <ForgotPassword />,
            },
            {
                path: "reset-password",
                element: <ResetPassword />,
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
            },
            {
                path: "create-article",
                element: <PrivateRoute><CreateArticle /></PrivateRoute>,
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
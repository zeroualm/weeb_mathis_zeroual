import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AuthProvider } from './context/AuthProvider.jsx'

import App from './App.jsx' 
import PrivateRoute from './PrivateRoute.jsx'

import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import Logout from "./pages/Logout/Logout.jsx";
import ArticleDetails from "./pages/ArticleDetails/ArticleDetails.jsx";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword.jsx";
import Signup from './pages/Signup/Signup.jsx'
import CreateArticle from './pages/CreateArticle/CreateArticle.jsx'
import ResetPassword from './pages/ResetPassword/ResetPassword.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                path: "/",
                element: <Home />,
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
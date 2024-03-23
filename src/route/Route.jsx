import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import ChefRecipes from '../shared/ChefRecipes';
import Login from "../pages/Login";
import Register from "../pages/Register";
import Blog from "../pages/Blog";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/chef/:id",
                element: <PrivateRoute><ChefRecipes /></PrivateRoute>,
                loader: ({params}) => fetch(`https://chef-recipe-hunter-server-puce-seven.vercel.app/chef/${params.id}`)
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/blog",
                element: <Blog />
            },
        ]
    },
]);

export default router;
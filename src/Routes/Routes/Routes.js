import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Category from "../../Pages/Category/Category";
import Checkout from "../../Pages/Checkout/Checkout";
import CourseDetails from "../../Pages/Course/Course";
import Faq from "../../Pages/FAQ/Faq";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Registration from "../../Pages/Registration/Registration";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () =>
                    fetch("https://learn-tech-edge-server.vercel.app/courses"),
            },
            {
                path: "/course-category/:id",
                element: <Category></Category>,
                loader: ({ params }) =>
                    fetch(
                        `https://learn-tech-edge-server.vercel.app/course-category/${params.id}`
                    ),
            },
            {
                path: "/course/:id",
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) =>
                    fetch(
                        `https://learn-tech-edge-server.vercel.app/course/${params.id}`
                    ),
            },
            {
                path: "/checkout/:id",
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({ params }) =>
                    fetch(
                        `https://learn-tech-edge-server.vercel.app/course/${params.id}`
                    ),
            },
            {
                path: "/faq",
                element: <Faq></Faq>,
            },
            {
                path: "/blog",
                element: <Blog></Blog>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/registration",
                element: <Registration></Registration>,
            },
        ],
    },
    {
        path: '*',
        element: <div className="text-center">
            <h1>404</h1>
            <h3>Not Found!</h3>
            <p>The place that never existed!</p>
        </div>
    }
]);

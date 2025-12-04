import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import MyProfile from "../pages/MyProfile";
import PriviteRoute from "../provider/PriviteRoute";
import Error from "../components/Error";
import Pets from "../pages/Pets";
import PetsDetails from "../pages/PetsDetails";




export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/pets',
                element: <Pets></Pets>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/plants/:plantId',
                element: <PriviteRoute>
                    <PetsDetails></PetsDetails>
                </PriviteRoute>
            },
            {
                path: '/myprofile',
                element: <PriviteRoute>
                    <MyProfile></MyProfile>
                </PriviteRoute>
            },
        ]
    },
    {
        path: '/*',
        element: <Error></Error>
    }
])

export default router;
import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import MyProfile from "../pages/MyProfile";
import PriviteRoute from "../provider/PriviteRoute";
import Error from "../components/Error";
import Pets from "../pages/Pets";
import PetsDetails from "../pages/ListingDetails";
import AddListing from "../pages/AddListing";
import ListingDetails from "../pages/ListingDetails";
import MyListings from "../pages/MyListings";
import UpdateListing from "../pages/UpdateListing";




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
                path: '/pets-details/:id',
                element: <PriviteRoute>
                    <ListingDetails></ListingDetails>
                </PriviteRoute>
            },
            {
                path: '/myprofile',
                element: <PriviteRoute>
                    <MyProfile></MyProfile>
                </PriviteRoute>
            },
            {
                path: '/add-listing',
                element: <PriviteRoute>
                    <AddListing></AddListing>
                </PriviteRoute>

            },
            {
                path: '/my-listings',
                element: <PriviteRoute>
                    <MyListings></MyListings>
                </PriviteRoute>

            },
            {
                path: '/update-listings/:id',
                element: <PriviteRoute>
                    <UpdateListing></UpdateListing>
                </PriviteRoute>

            }
        ]
    },
    {
        path: '/*',
        element: <Error></Error>
    }
])

export default router;
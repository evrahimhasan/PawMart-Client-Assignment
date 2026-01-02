import React, { use, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';
import { FaPaw } from 'react-icons/fa';
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Navbar = () => {
    const { user, logOut } = use(AuthContext)
    const [theme, setTheme] = useState(localStorage.getItem('theme') || "light")

    useEffect(() => {
        const html = document.querySelector('html')
        html.setAttribute("data-theme", theme)
        localStorage.setItem("theme", theme)
    }, [theme])


    const handleTheme = (checked) => {
        setTheme(checked ? "dark" : "light")
    }


    const handleLogout = () => {
        // console.log('user try to logout');
        logOut()
            .then(() => {
                toast.success('Logged out successfully')
            })
            .catch((error) => {
                console.log(error);
            });

    }
    return (
        <div className="flex flex-col gap-3 md:flex-row justify-between items-center">
            {/* <div className=''>{user && user.email}</div> */}
            <div className="flex items-center gap-2 mb-3">
                <FaPaw className="text-3xl text-yellow-400" />
                <h2 className="text-2xl text-orange-900 font-bold tracking-wide">PawMart</h2>
            </div>
            <div className="nav flex flex-col md:flex-row gap-5 items-center">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `px-3 py-1 rounded-md transition font-medium
         ${isActive
                            ? "text-orange-600 dark:text-orange-400 underline font-semibold"
                            : "text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400"
                        }`
                    }
                >
                    Home
                </NavLink>
                <NavLink to="/pets" className={({ isActive }) =>
                    `px-3 py-1 rounded-md transition font-medium
         ${isActive
                        ? "text-orange-600 dark:text-orange-400 underline font-semibold"
                        : "text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400"
                    }`
                }>Pets & Supplies</NavLink>

                {
                    user && (
                        <>
                            <NavLink to="add-listing" className={({ isActive }) =>
                                `px-3 py-1 rounded-md transition font-medium
         ${isActive
                                    ? "text-orange-600 dark:text-orange-400 underline font-semibold"
                                    : "text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400"
                                }`
                            }>Add Listing</NavLink>
                            <NavLink to="my-listings" className={({ isActive }) =>
                                `px-3 py-1 rounded-md transition font-medium
         ${isActive
                                    ? "text-orange-600 dark:text-orange-400 underline font-semibold"
                                    : "text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400"
                                }`
                            }>My Listings</NavLink>
                            <NavLink to="my-orders" className={({ isActive }) =>
                                `px-3 py-1 rounded-md transition font-medium
         ${isActive
                                    ? "text-orange-600 dark:text-orange-400 underline font-semibold"
                                    : "text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400"
                                }`
                            }>My Orders</NavLink>
                        </>
                    )
                }

                <NavLink to="/about" className={({ isActive }) =>
                    `px-3 py-1 rounded-md transition font-medium
         ${isActive
                        ? "text-orange-600 dark:text-orange-400 underline font-semibold"
                        : "text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400"
                    }`
                }>About Us</NavLink>

            </div>

            <div className='flex justify-center items-center gap-4'>
                {/* Theme Toggle */}
                <div className="flex items-center gap-2">
                    <span className="text-yellow-500">
                        <MdLightMode />
                    </span>
                    <input
                        onChange={(e) => handleTheme(e.target.checked)}
                        type="checkbox"
                        checked={theme === "dark"}
                        className="toggle"
                    />
                    <span className="text-gray-500">
                        <MdDarkMode />
                    </span>
                </div>

                {
                    user ? (
                        <div className='flex gap-3 justify-center items-center'>
                            <div>
                                <Link to='/dashboard' className='btn bg-orange-600'>My Dashboard</Link>
                            </div>

                            <div className="dropdown dropdown-end">

                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="User Avatar"
                                            src={user.photoURL || 'https://img.icons8.com/?size=64&id=115318&format=png'}
                                        />
                                    </div>
                                </div>



                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                                >
                                    <li>
                                        <span className="font-semibold">
                                            {user.displayName || user.email}
                                        </span>
                                    </li>
                                    {/* <li>
                                        <span className="font-semibold">
                                            <Link to='/myprofile'>Update Profile</Link>
                                        </span>
                                    </li> */}
                                    <li>
                                        <button onClick={handleLogout}>Logout</button>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    ) : (
                        <div className='flex gap-3'>
                            <div className="login-btn">
                                <Link to='/login' className="btn btn-primary px-10 ">Login</Link>
                            </div>
                            <div className="login-btn">
                                <Link to='/signup' className="btn btn-primary px-10 ">Sign Up</Link>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>

        // <div className='bg-orange-100'>
        //     <div className="flex flex-col gap-3 md:flex-row justify-between items-center">
        //         {/* <div className=''>{user && user.email}</div> */}
        //         <div className="flex items-center gap-2 mb-3">
        //             <FaPaw className="text-3xl text-yellow-400" />
        //             <h2 className="text-2xl text-orange-900 font-bold tracking-wide">PawMart</h2>
        //         </div>
        //         <div className="nav flex flex-col md:flex-row gap-5 items-center">
        //             <NavLink to="/" className={({ isActive }) => isActive ?
        //                 "text-orange-700 underline" : ""}>Home</NavLink>
        //             <NavLink to="/pets" className={({ isActive }) => isActive ?
        //                 "text-orange-700 underline" : ""}>Pets & Supplies</NavLink>
        //             {
        //                 user && (
        //                     <>
        //                         <NavLink to="add-listing" className={({ isActive }) => isActive ?
        //                             "text-orange-700 underline" : ""}>Add Listing</NavLink>
        //                         <NavLink to="my-listings" className={({ isActive }) => isActive ?
        //                             "text-orange-700 underline" : ""}>My Listings</NavLink>
        //                         <NavLink to="my-orders" className={({ isActive }) => isActive ?
        //                             "text-orange-700 underline" : ""}>My Orders</NavLink>
        //                     </>
        //                 )
        //             }

        //         </div>

        //         <div className='flex justify-center items-center gap-4'>
        //             {/* Theme Toggle */}
        //             <div className="flex items-center gap-2">
        //                 <span>
        //                     <MdLightMode />
        //                 </span>
        //                 <input
        //                     onChange={(e) => handleTheme(e.target.checked)}
        //                     type="checkbox"
        //                     checked={theme === "dark"}
        //                     className="toggle"
        //                 />
        //                 <span>
        //                     <MdDarkMode />
        //                 </span>
        //             </div>
        //             {
        //                 user ? (
        //                     <div className="dropdown dropdown-end">

        //                         <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        //                             <div className="w-10 rounded-full">
        //                                 <img
        //                                     alt="User Avatar"
        //                                     src={user.photoURL || 'https://img.icons8.com/?size=64&id=115318&format=png'}
        //                                 />
        //                             </div>
        //                         </div>



        //                         <ul
        //                             tabIndex={0}
        //                             className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        //                         >
        //                             <li>
        //                                 <span className="font-semibold">
        //                                     {user.displayName || user.email}
        //                                 </span>
        //                             </li>
        //                             <li>
        //                                 <span className="font-semibold">
        //                                     <Link to='/myprofile'>Update Profile</Link>
        //                                 </span>
        //                             </li>
        //                             <li>
        //                                 <button onClick={handleLogout}>Logout</button>
        //                             </li>
        //                         </ul>

        //                     </div>
        //                 ) : (
        //                     <div className='flex gap-3'>
        //                         <div className="login-btn">
        //                             <Link to='/login' className="btn btn-primary px-10 ">Login</Link>
        //                         </div>
        //                         <div className="login-btn">
        //                             <Link to='/signup' className="btn btn-primary px-10 ">Sign Up</Link>
        //                         </div>
        //                     </div>
        //                 )
        //             }
        //         </div>
        //     </div>
        // </div>
    );
};

export default Navbar;
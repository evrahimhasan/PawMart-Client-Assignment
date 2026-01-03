import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';
import { Link, NavLink } from 'react-router';
import { FaPaw } from 'react-icons/fa';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const DashboardNavbar = () => {

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
            <Link to='/dashboard' className="flex items-center gap-2 mb-3">
                <FaPaw className="text-3xl text-yellow-400" />
                <h2 className="text-2xl text-orange-900 font-bold tracking-wide">PawMart</h2>
            </Link>
            <div className="nav hidden md:flex flex-col md:flex-row gap-5 items-center">
                <NavLink
                    to="/dashboard"
                    end
                    className={({ isActive }) =>
                        `px-3 py-1 rounded-md transition font-medium
                 ${isActive
                            ? "text-orange-600 dark:text-orange-400 underline font-semibold"
                            : "text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400"
                        }`
                    }
                >
                    Dashboard Home
                </NavLink>
                <NavLink to="/dashboard/myprofile" className={({ isActive }) =>
                    `px-3 py-1 rounded-md transition font-medium
                 ${isActive
                        ? "text-orange-600 dark:text-orange-400 underline font-semibold"
                        : "text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400"
                    }`
                }>My Profile</NavLink>

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
                        <div>
                            <div className="flex items-center gap-4">
                                <div>
                                    <p className="text-gray-600 dark:text-gray-200 font-medium">
                                        {user?.displayName || user?.email || 'User'}
                                    </p>
                                </div>
                                <div>
                                    <button className='btn bg-orange-600' onClick={handleLogout}>Logout</button>
                                </div>
                            </div>
                        </div>
                    ) : ""
                }
            </div>
        </div>
    );
};

export default DashboardNavbar;
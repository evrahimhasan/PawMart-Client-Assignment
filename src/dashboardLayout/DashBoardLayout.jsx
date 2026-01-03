import React from 'react';
import Aside from '../components/Aside';
import { Outlet } from 'react-router';
import DashboardNavbar from '../components/DashboardNavbar';

const DashBoardLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <nav className="sticky top-0 z-50 bg-orange-100 shadow" >
                <div className='w-11/12 mx-auto my-3'>
                    <DashboardNavbar></DashboardNavbar>
                </div>
            </nav>

            <div className="flex flex-1">
                <Aside></Aside>

                <div className="flex-1 p-6">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;
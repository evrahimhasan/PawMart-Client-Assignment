import React from 'react';
import Aside from '../components/Aside';
import { Outlet } from 'react-router';

const DashBoardLayout = () => {
    return (
        <div className='flex'>
            <Aside></Aside>
            <div className='flex-1 p-5'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoardLayout;
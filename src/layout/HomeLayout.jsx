import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomeLayout = () => {

    return (
        <div className="flex flex-col min-h-screen">
            <nav className="sticky top-0 z-50 bg-orange-100 shadow" >
                <div className='w-11/12 mx-auto my-3'>
                    <Navbar></Navbar>
                </div>
            </nav>
            <main className='flex-1 w-11/12 mx-auto my-3'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;
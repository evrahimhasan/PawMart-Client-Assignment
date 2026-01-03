import React from 'react';
import CountUp from 'react-countup';
import { FaHeart, FaHome, FaPaw, FaUsers } from 'react-icons/fa';

const Statistics = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Our <span className="text-orange-600">Impact</span> So Far
                </h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
                    We're proud to connect loving pets with caring families every day.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Pets Adopted */}
                    <div className="p-8 rounded-2xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transition">
                        <FaPaw className="text-5xl text-orange-600 mx-auto mb-4" />
                        <h3 className="text-4xl font-bold text-orange-600">
                            <CountUp end={500} duration={3} suffix="+" />
                        </h3>
                        <p className="text-xl mt-2 text-gray-700 dark:text-gray-300">Pets Adopted</p>
                    </div>

                    {/* Happy Owners */}
                    <div className="p-8 rounded-2xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transition">
                        <FaUsers className="text-5xl text-yellow-600 mx-auto mb-4" />
                        <h3 className="text-4xl font-bold text-yellow-600">
                            <CountUp end={10000} duration={3} suffix="+" />
                        </h3>
                        <p className="text-xl mt-2 text-gray-700 dark:text-gray-300">Happy Owners</p>
                    </div>

                    {/* Total Listings */}
                    <div className="p-8 rounded-2xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transition">
                        <FaHome className="text-5xl text-blue-600 mx-auto mb-4" />
                        <h3 className="text-4xl font-bold text-blue-600">
                            <CountUp end={200} duration={3} suffix="+" />
                        </h3>
                        <p className="text-xl mt-2 text-gray-700 dark:text-gray-300">Active Listings</p>
                    </div>

                    {/* Loving Homes */}
                    <div className="p-8 rounded-2xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transition">
                        <FaHeart className="text-5xl text-red-600 mx-auto mb-4" />
                        <h3 className="text-4xl font-bold text-red-600">
                            <CountUp end={98} duration={3} suffix="%" />
                        </h3>
                        <p className="text-xl mt-2 text-gray-700 dark:text-gray-300">Success Rate</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Statistics;
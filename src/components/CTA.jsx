import React from 'react';
import { Link } from 'react-router';

const CTA = () => {
    return (
        <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-700 text-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Ready to Find Your New Best Friend?
                </h2>
                <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90">
                    Thousands of loving pets are waiting for a forever home. Start your journey today!
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <Link to="/pets" className="btn btn-lg bg-white text-orange-600 hover:bg-gray-100 text-xl px-10">
                        Browse All Pets & Supplies
                    </Link>
                    <Link to="/add-listing" className="btn btn-lg btn-outline text-white border-white hover:bg-white hover:text-orange-600 text-xl px-10">
                        List Your Pet
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CTA;
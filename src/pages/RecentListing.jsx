import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const RecentListing = () => {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/listings')
            .then(res => res.json())
            .then(data => setListings(data));
    }, []);
    console.log(listings);
    return (
        <section className="text-center">
            <h2 className="text-3xl font-bold text-green-700 mb-6">Top Rated Indoor Plants</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {listings.slice(0, 6).map((listing) => (
                    <div
                        key={listing._id}
                        className="rounded-2xl p-4 shadow hover:shadow-lg transition bg-white"
                    >
                        <img
                            src={listing.image}
                            alt={listing.name}
                            className="w-full h-[450px] object-cover rounded-lg"
                        />
                        <h3 className="text-xl font-semibold mt-3">{listing.name}</h3>
                        <p className="text-green-600 font-medium">${listing.price}</p>
                        <p className="text-yellow-500">Date: {listing.date}</p>
                        <Link
                            to={`/pets-details/${listing?._id}`}
                            className="mt-3 inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                        >
                            View Details
                        </Link>
                    </div>
                ))}
            </div>
            <div className='flex justify-center items-center mt-10'>
                <Link to='/plants' className="btn bg-gradient-to-r from-green-600 to-green-800 
                py-3 px-4 text-[16px] text-white">Show All</Link>
            </div>
        </section>
    );
};

export default RecentListing;
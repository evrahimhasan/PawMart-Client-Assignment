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
                        className='bg-[#fef9f5] p-6 rounded-xl shadow-md hover:-translate-y-2 transition'
                    >
                        <div className="mb-5">
                            <img
                                className="w-full h-[450px] object-cover rounded-lg"
                                src={listing.image}
                                alt=""
                            />
                        </div>
                        <h2 className="text-2xl font-bold">{listing.name}</h2>
                        <div className="flex justify-between font-semibold mt-3 text-xl">
                            <h1>Owner Name: {listing.date}</h1>
                            <p>Price:{listing.price}$</p>
                        </div>
                        <div className="flex gap-2 items-center ">
                            <span className="text-green-500"></span>
                            <h1 className="font-semibold mt-2 text"> {listing.location}</h1>
                        </div>
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
                <Link to='/pets' className="btn bg-gradient-to-r from-green-600 to-green-800 
                py-3 px-4 text-[16px] text-white">Show All</Link>
            </div>
        </section>
    );
};

export default RecentListing;
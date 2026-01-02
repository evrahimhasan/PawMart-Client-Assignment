import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import Loading from './Loading';

const RecentListing = () => {
    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetch('https://paw-mart-server-pi.vercel.app/recent-listings')
            .then(res => res.json())
            .then(data => setListings(data));
        setLoading(false)
    }, []);
    // console.log(listings);

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <section className="text-center">
            <h2 className="text-3xl font-bold text-orange-600 mb-6">Recent Listings</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {listings.map((listing) => (
                    <div
                        key={listing._id}
                        className='p-6 rounded-xl shadow-md hover:-translate-y-2 transition'
                    >
                        <div className="mb-5">
                            <img
                                className="w-full h-[450px] object-cover rounded-lg"
                                src={listing.image}
                                alt=""
                            />
                        </div>
                        <div className='px-6'>
                            <div className="flex justify-between font-semibold mt-3 text-xl">
                                <h2 className="text-2xl font-bold">{listing.name}</h2>
                                <h1>{listing.category}</h1>
                            </div>
                            <div className="flex justify-between font-semibold mt-3 text-xl">
                                <p>Price:{listing.price}</p>
                                <h1 className="font-semibold text"> {listing.location}</h1>
                            </div>
                        </div>
                        <Link
                            to={`/pets-details/${listing?._id}`}
                            className="mt-3 inline-block bg-gradient-to-r from-orange-600 to-orange-800 
                            text-white px-4 py-2 rounded-lg hover:bg-green-700"
                        >
                            View Details
                        </Link>
                    </div>
                ))}
            </div>
            <div className='flex justify-center items-center mt-10'>
                <Link to='/pets' className="btn bg-gradient-to-r from-orange-600 to-orange-800 
                py-3 px-4 text-[16px] text-white">Show All</Link>
            </div>
        </section>
    );
};

export default RecentListing;
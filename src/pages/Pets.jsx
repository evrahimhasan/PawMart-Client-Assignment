import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';
import Loading from './Loading';


const Pets = () => {
    const [listings, setListings] = useState([]);
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("")
    const location = useLocation()

    useEffect(() => {
        setLoading(true)
        fetch(`https://paw-mart-server-pi.vercel.app/listings?category=${category}`)
            .then(res => res.json())
            .then(data => setListings(data));
        setLoading(false)
        // console.log('emran');
    }, [category, location.pathname]);

    // console.log(category);

    if (loading) {
        return <Loading></Loading>
    }


    const filteredListings = listings.filter(listing => listing.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="space-y-12">
            <div className='flex justify-between items-center'>
                <select onChange={(e) => setCategory(e.target.value)} defaultValue="Chose category" className="select">
                    <option value="Chose category" disabled>
                        Chose category
                    </option>
                    <option value="">All</option>
                    <option value="Pets">Pets</option>
                    <option value="Foods">Foods</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Care Products">Care Products</option>
                </select>

                <input
                    type="text"
                    placeholder="Search by name..."
                    className="input input-bordered"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <section className="text-center">
                <h2 className="text-3xl font-bold mb-8 text-center">
                    Pets & <span className="text-orange-600">Supplies Page</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredListings.map((listing) => (
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

                {filteredListings.length === 0 && (
                    <p className="text-2xl mt-6">No matching Pets or Supplies found.</p>
                )}

            </section>

        </div>
    );
};

export default Pets;
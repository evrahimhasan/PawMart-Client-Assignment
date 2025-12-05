import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';


const Pets = () => {
    const [listings, setListings] = useState([]);
    const [category, setCategory] = useState('');

    useEffect(() => {
        fetch(`http://localhost:3000/listings?category=${category}`)
            .then(res => res.json())
            .then(data => setListings(data));
        console.log('emran');
    }, [category]);

    console.log(category);
    return (
        <div className="space-y-12">
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
            <section className="text-center">
                <h2 className="text-3xl font-bold text-green-700 mb-6">Top Rated Indoor Plants</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {listings.map((listing) => (
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
                                className="mt-3 inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                            >
                                View Details
                            </Link>
                        </div>
                    ))}
                </div>
            </section>





        </div>
    );
};

export default Pets;
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
                            className='rounded-2xl p-4 shadow hover:shadow-lg transition bg-white duration-300 ease-out 
                                                hover:translate-y-3 hover:scale-[1.03]'
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
                                <p>Price:{listing.price}</p>
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
            </section>





        </div>
    );
};

export default Pets;
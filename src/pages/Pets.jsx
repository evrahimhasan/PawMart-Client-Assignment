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
            </section>





        </div>
    );
};

export default Pets;
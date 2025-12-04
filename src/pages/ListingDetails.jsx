import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Loading from './Loading';

const ListingDetails = () => {
    const { id } = useParams();
    const [listing, setListing] = useState(null);
    // console.log(plantId);

    useEffect(() => {
        fetch(`http://localhost:3000/listings/${id}`)
            .then(res => res.json())
            .then(data => {
                setListing(data)

            });
    }, [id]);

    if (!listing) return <Loading></Loading>


    return (
        <section className="py-16">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10">

                {/* Image */}
                <div>
                    <img
                        src={listing.image}
                        alt={listing.name}
                        className="rounded-xl shadow-lg w-full object-cover"
                    />
                </div>

                {/* Details */}
                <div className="bg-white p-8 rounded-xl shadow-lg">
                    <h1 className="text-3xl font-bold mb-3">{listing.name}</h1>

                    <p className="text-lg text-gray-600 mb-2">
                        Category: <span className="font-semibold text-orange-600">{listing.category}</span>
                    </p>

                    <p className="text-lg text-gray-600 mb-2">
                        Email: <span className="font-medium">{listing.email}</span>
                    </p>

                    <p className="text-lg text-gray-600 mb-2">
                        Location: <span className="font-medium">{listing.location}</span>
                    </p>

                    <p className="text-2xl font-bold text-orange-600 mb-5">
                        {listing.price === 0 ? "Free for Adoption" : `Price: ${listing.price}`}
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">{listing.description}</p>

                    
                </div>

            </div>
        </section>

    );
};

export default ListingDetails;
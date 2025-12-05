import React, { use, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Loading from './Loading';
import { AuthContext } from '../provider/AuthProvider';

const ListingDetails = () => {
    const { id } = useParams();
    const [listing, setListing] = useState(null);
    const { user } = use(AuthContext)
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
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>Adopt / Order Now</button>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <form className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <legend className="fieldset-legend">Order Details</legend>

                            <label className="label">Buyer Name</label>
                            <input
                                readOnly
                                defaultValue={user.displayName}
                                type="text" className="input"
                                placeholder="Buyer Name" />

                            <label className="label">Email</label>
                            <input
                                readOnly
                                defaultValue={user.email}
                                type="email"
                                className="input"
                                placeholder="Email" />

                            <label className="label">Product/Listing ID</label>
                            <input
                                readOnly
                                defaultValue={id}
                                type="text"
                                className="input"
                                placeholder="Product/Listing ID" />

                            <label className="label">Product/Listing Name</label>
                            <input
                                readOnly
                                defaultValue={listing.name}
                                type="text" className="input"
                                placeholder="Product/Listing Name" />

                            <label className="label">Quantity</label>
                            <input type="number" className="input" placeholder="Quantity" />

                            <label className="label">Price</label>
                            <input
                                readOnly
                                defaultValue={listing.price}
                                type="number" className="input"
                                placeholder="Price" />

                            <label className="label">Address</label>
                            <input type="text" className="input" placeholder="Address" />

                            <label className="label">Phone</label>
                            <input type="text" className="input" placeholder="Phone" />

                            <label className="label">Additional Notes</label>
                            <textarea type="text" className="input" placeholder="Additional Notes" />

                            <button className="btn btn-primary">Order</button>
                        </form>
                    </div>
                </dialog>
            </div>
        </section>

    );
};

export default ListingDetails;
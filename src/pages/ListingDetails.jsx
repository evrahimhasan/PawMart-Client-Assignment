import React, { use, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import Loading from './Loading';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';

const ListingDetails = () => {
    const { id } = useParams();
    const [listing, setListing] = useState(null);
    const { user } = use(AuthContext)
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    // console.log(plantId);

    useEffect(() => {
        setLoading(true)
        fetch(`https://paw-mart-server-pi.vercel.app/listings/${id}`)
            .then(res => res.json())
            .then(data => {
                setListing(data)
                setLoading(false)

            })
            .catch(error => {
                console.log(error);
                setLoading(false)
            })
    }, [id]);

    const handleOrder = (e) => {
        e.preventDefault()
        const form = e.target;

        const buyerName = form.buyerName.value;
        const email = form.email.value;
        const productId = form.productId.value;
        const productName = form.productName.value;
        const quantity = parseInt(form.quantity.value);
        const price = parseInt(form.price.value);
        const address = form.address.value;
        const date = form.date.value
        const phone = form.phone.value;
        const aditionalNotes = form.aditionalNotes.value;

        const formData = {
            buyerName,
            email,
            productId,
            productName,
            quantity,
            price,
            address,
            date,
            phone,
            aditionalNotes

        }
        axios.post('https://paw-mart-server-pi.vercel.app/orders', formData)
            .then(res => {
                console.log(res);
                navigate("/my-orders")
            })
            .catch(error => {
                console.log(error);
            })


    }

    // if (!listing) return <Loading></Loading>
    if (loading) {
        return <Loading></Loading>
    }


    return (
        <section className="py-16">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10">

                {/* Image */}
                <div>
                    <img
                        src={listing.image}
                        alt={listing.name}
                        className="rounded-xl shadow-lg w-full h-[400px] object-cover"
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
                <div className="lg:mt-6 lg:col-span-2 lg:flex lg:justify-center">
                    <button className="btn bg-gradient-to-r from-orange-600 to-orange-800 py-3 px-4 text-[16px] text-white"
                        onClick={() => document.getElementById('my_modal_3').showModal()}>Adopt / Order Now</button>
                </div>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <form onSubmit={handleOrder} className="fieldset bg-base-200 border-base-300 
                        rounded-box w-full border p-4">
                            <legend className="fieldset-legend">Order Details</legend>

                            {/* Buyer Name */}
                            <label className="label">Buyer Name</label>
                            <input
                                readOnly
                                defaultValue={user.displayName}
                                type="text"
                                name="buyerName"
                                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                                placeholder="Buyer Name" />

                            {/* Email */}
                            <label className="label">Email</label>
                            <input
                                readOnly
                                defaultValue={user.email}
                                type="email"
                                name="email"
                                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                                placeholder="Email" />

                            {/* Product/Listing ID */}
                            <label className="label">Product/Listing ID</label>
                            <input
                                readOnly
                                defaultValue={id}
                                type="text"
                                name="productId"
                                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                                placeholder="Product/Listing ID" />

                            {/* Product/Listing Name */}
                            <label className="label">Product/Listing Name</label>
                            <input
                                readOnly
                                defaultValue={listing.name}
                                type="text"
                                name="productName"
                                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                                placeholder="Product/Listing Name" />

                            {/* Quantity */}
                            <label className="label">Quantity</label>
                            <input
                                required
                                type="number"
                                name="quantity"
                                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                                placeholder="Quantity" />

                            {/* Price */}
                            <label className="label">Price</label>
                            <input
                                readOnly
                                defaultValue={listing.price}
                                type="number"
                                name="price"
                                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                                placeholder="Price" />

                            {/* Address */}
                            <label className="label">Address</label>
                            <input
                                required
                                type="text"
                                name="address"
                                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                                placeholder="Address" />

                            {/* Date */}
                            <label className="label">Date</label>
                            <input
                                required
                                defaultValue={new Date()}
                                // type="date"
                                name="date"
                                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                                placeholder="Date" />

                            {/* Phone */}
                            <label className="label">Phone</label>
                            <input
                                required
                                type="text"
                                name="phone"
                                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                                placeholder="Phone" />

                            {/* Additional Notes */}
                            <label className="label">Additional Notes</label>
                            <textarea type="text"
                                name="aditionalNotes"
                                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                                placeholder="Additional Notes" />

                            <button className="btn btn-primary">Order</button>
                        </form>
                    </div>
                </dialog>
            </div>
        </section>

    );
};

export default ListingDetails;
import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import Loading from './Loading';

const MyListings = () => {
    const [myListings, setMyListings] = useState([]);
    const { user } = use(AuthContext)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        fetch(`http://localhost:3000/my-listings?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyListings(data)
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
                setLoading(false)
            })
    }, [user?.email]);

    // console.log(myListings);

    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`http://localhost:3000/delete/${id}`)
                    .then(res => {
                        console.log(res.data);
                        const filteredData = myListings.filter(listing => listing._id != id)
                        // console.log(filteredData)
                        setMyListings(filteredData)
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your listing has been deleted.",
                            icon: "success"
                        });
                    })
                    .catch(error => {
                        console.log(error);
                    })

            }
        });

    }

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">

                <h2 className="text-3xl font-bold mb-8 text-center">
                    My <span className="text-orange-600">Listings</span>
                </h2>

                {myListings.length === 0 ? (
                    <p className="text-gray-600">You have not added any listings yet.</p>
                ) : (
                    <div className="py-10 px-4 min-h-screen">

                        <div className="overflow-x-auto">
                            <table className="min-w-full rounded-xl shadow-lg overflow-hidden">
                                {/* Table Head */}
                                <thead className="bg-orange-600 text-white">
                                    <tr>
                                        <th className="py-3 px-6 text-left">Name</th>
                                        <th className="py-3 px-6 text-left">Description</th>
                                        <th className="py-3 px-6 text-left">Price</th>
                                        <th className="py-3 px-6 text-center">Action</th>
                                    </tr>
                                </thead>

                                {/* Table Body */}
                                <tbody className="divide-y divide-gray-200">
                                    {myListings.map((listing) => (
                                        <tr
                                            key={listing._id}
                                            className="hover:bg-amber-50 hover:text-black transition duration-200"
                                        >
                                            {/* Name + Avatar */}
                                            <td className="py-4 px-6">
                                                <div className="flex items-center gap-4">
                                                    <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-orange-400">
                                                        <img
                                                            src={listing.image}
                                                            alt={listing.name}
                                                            className="h-full w-full object-cover"
                                                        />
                                                    </div>
                                                    <div>
                                                        <div className="font-semibold text-lg">
                                                            {listing.name}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>

                                            {/* Description */}
                                            <td className="py-4 px-6">
                                                <p className="line-clamp-2">{listing.description}</p>
                                            </td>

                                            {/* Price */}
                                            <td className="py-4 px-6 font-semibold">
                                                {listing.price === 0 ? "Free for Adoption" : `${listing.price}`}
                                            </td>

                                            {/* Action Buttons */}
                                            <td className="py-4 px-6 flex gap-3 justify-center">
                                                <button
                                                    onClick={() => handleDelete(listing._id)}
                                                    className="btn btn-error btn-sm hover:bg-red-600 transition"
                                                >
                                                    Delete
                                                </button>
                                                <Link to={`/update-listings/${listing._id}`}>
                                                    <button className="btn btn-primary btn-sm hover:bg-blue-600 transition">
                                                        Edit
                                                    </button>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default MyListings;
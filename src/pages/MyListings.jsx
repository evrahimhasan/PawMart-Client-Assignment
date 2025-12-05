import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const MyListings = () => {
    const [myListings, setMyListings] = useState([]);
    const { user } = use(AuthContext)

    useEffect(() => {
        fetch(`http://localhost:3000/my-listings?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyListings(data))
            .catch(error => console.log(error))
    }, [user?.email]);

    console.log(myListings);

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
                        console.log(filteredData)
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
    return (
        <div>
            <h2>My Services</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            myListings.map(listing =>
                                <tr>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={listing.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{listing.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p>{listing.description}</p>
                                    </td>
                                    <td>{listing.price}</td>
                                    <td className='flex gap-3'>
                                        <button onClick={() => handleDelete(listing?._id)} className="btn btn-error btn-xs">Delete</button>
                                        <Link to={`/update-listings/${listing._id}`}><button className="btn btn-primary btn-xs">Edit</button></Link>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyListings;
import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';

const UpdateListing = () => {
    const { user } = use(AuthContext);
    const { id } = useParams()
    const [update, setUpdate] = useState();
    const [category, setCategory] = useState(update?.category)
    const navigation = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:3000/listings/${id}`)
            .then(res => {
                setUpdate(res.data)
                setCategory(res.data.category)
            })
    }, [id])

    // console.log(update);

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const category = form.category.value;
        const price = parseInt(form.price.value);
        const location = form.location.value;
        const description = form.description.value;
        const image = form.image.value;
        const date = form.date.value;
        const email = form.email.value;

        const updatedFormData = {
            name,
            category,
            price,
            location,
            description,
            image,
            date,
            email,
            createdAt: update.createdAt
        }
        // console.log(updatedFormData);

        axios.put(`http://localhost:3000/update/${id}`, updatedFormData)
            .then(res => {
                console.log(res);
                Swal.fire({
                    title: "Listing updated succesfully",
                    icon: "success",
                    draggable: true
                });
                navigation('/my-listings')
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl">
            <div className="card-body p-6 relative">
                <h2 className="text-3xl font-bold mb-8 text-center">
                    Update <span className="text-orange-600">Listing</span>
                </h2>
                <form onSubmit={handleUpdate} className="space-y-4">
                    {/* Name Field */}
                    <div>
                        <label className="label font-medium">Product/ Pet Name</label>
                        <input
                            defaultValue={update?.name}
                            type="text"
                            name="name"
                            required
                            className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                            placeholder="Enter name"
                        />
                    </div>

                    {/* Category Dropdown */}
                    <div>
                        <label className="label font-medium">Category</label>
                        <select
                            value={category}
                            name="category"
                            required
                            onChange={(e) => setCategory(e.target.value)}
                            className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
                        >
                            <option value="">Select category</option>
                            <option value="Pets">Pets</option>
                            <option value="Foods">Foods</option>
                            <option value="Accessories">Accessories</option>
                            <option value="Care Products">Care Products</option>
                        </select>
                    </div>


                    {/* Price Field */}
                    <div>
                        <label className="label font-medium">Price</label>
                        <input
                            defaultValue={update?.price}
                            type="number"
                            name="price"
                            required
                            className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                        />
                    </div>


                    {/* Location Field */}
                    <div>
                        <label className="label font-medium">Location</label>
                        <input
                            defaultValue={update?.location}
                            type="text"
                            name="location"
                            required
                            className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                        />
                    </div>


                    {/* Description Textarea */}
                    <div>
                        <label className="label font-medium">Description</label>
                        <textarea
                            defaultValue={update?.description}
                            name="description"
                            className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 "
                            placeholder="Enter description"
                            required
                        ></textarea>
                    </div>

                    {/* Image URL */}
                    <div>
                        <label className="label font-medium">Photo URL</label>
                        <input
                            defaultValue={update?.image}
                            type="url"
                            name="image"
                            required
                            className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                            placeholder="https://example.com/image.jpg"
                        />
                    </div>

                    {/* Date pick up */}
                    <div>
                        <label className="label font-medium">Price</label>
                        <input
                            defaultValue={update?.date}
                            type="date"
                            name="date"
                            required
                            className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                        />
                    </div>


                    {/* Email Field */}
                    <div>
                        <label className="label font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={user?.email || ""}
                            readOnly
                            className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        className="btn w-full text-white mt-6 rounded-full bg-linear-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700"
                    >
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateListing;
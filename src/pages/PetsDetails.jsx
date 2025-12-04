import React, { useEffect, useState } from 'react';
import { FaStar, FaWarehouse } from 'react-icons/fa';
import { useParams } from 'react-router';
import Loading from './Loading';
import { toast } from 'react-toastify';

const PetsDetails = () => {
    const { plantId } = useParams();
    const [plant, setPlant] = useState(null);
    // console.log(plantId);

    useEffect(() => {
        fetch('/plants.json')
            .then(res => res.json())
            .then(data => {
                const foundPlant = data.find(p => p.plantId === parseInt(plantId));
                setPlant(foundPlant);
            });
    }, [plantId]);

    if (!plant) return <Loading></Loading>



    const handleBookConsultation = (e) => {
        e.preventDefault();
        e.target.reset();
        toast.success('Consultation booked successfully!');
    }
    return (
        <section className=' w-11/12 mx-auto my-10 space-y-5'>
            <div>
                <div className="p-5 bg-gray-100  ">
                    <div className="md:flex  ">
                        <div>
                            <img className="h-[350px] w-[350px] rounded-lg" src={plant.image} alt={plant.plantName} />
                        </div>
                        <div className="ml-[50px]">
                            <div className="md:ml-10 ">
                                <h1 className=" text-4xl font-bold">{plant.plantName}</h1>
                                <p className="mt-2 text-xl">
                                    Price: <span className="text-[#632EE3] text-2xl">{plant.price}</span>
                                </p>

                            </div>
                            <div className=" ml-10 mt-8">

                                <div className="mt-5 md:mt-0">

                                    <div>
                                        <FaStar className="text-orange-500 h-[50px] w-[50px]" />
                                    </div>


                                    <p>Average Ratings</p>
                                    <h1 className="font-bold text-5xl">{plant.rating}</h1>
                                </div>

                            </div>
                            <div className=" ml-10 mt-8">

                                <div className="mt-5 md:mt-0">
                                    <div>
                                        <FaWarehouse className="text-green-500 h-[50px] w-[50px]" />
                                    </div>
                                    <p>Available Stock</p>
                                    <h1 className="font-bold text-5xl">{plant.availableStock}</h1>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='text-4xl font-bold'>description</h1>
                    <p className='text-gray-400 mt-5'>{plant.description}</p>
                </div>
            </div>



            <div className='mt-10 bg-white p-6 rounded-xl shadow'>
                <h2 className='text-2xl mb-4 text-green-600'>Book Consultation</h2>
                <form onSubmit={handleBookConsultation} className='space-y-4 max-w-md'>
                    {/* Name */}
                    <div>
                        <label className='block font-medium mb-1'>Name</label>
                        <input className='w-full p-2 rounded border border-gray-300'
                            type="text"
                            name='name'
                            placeholder='Your Name'
                            required />
                    </div>
                    {/* Email */}
                    <div>
                        <label className='block font-medium mb-1'>Email</label>
                        <input className='w-full p-2 rounded border border-gray-300'
                            type="email"
                            name='email'
                            placeholder='Your Email'
                            required />
                    </div>
                    <button className='btn bg-gradient-to-r from-green-600 to-green-800 
                py-3 px-4 text-[16px] text-white'
                        type='submit'>Book Now</button>
                </form>
            </div>
        </section>

    );
};

export default PetsDetails;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import MeetExperts from '../components/PetHeroes';
import Banner from '../components/Banner';
import WhyAdopt from '../components/WhyAdopt';

const Home = () => {
    const [plants, setPlants] = useState([]);

    useEffect(() => {
        fetch('/plants.json')
            .then(res => res.json())
            .then(data => setPlants(data));
    }, []);
    return (
        <>
            <Banner plants={plants}></Banner>
            <div className="space-y-12">
                <section className="text-center">
                    <h2 className="text-3xl font-bold text-green-700 mb-6">Top Rated Indoor Plants</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {plants.slice(0, 3).map((plant) => (
                            <div
                                key={plant.plantId}
                                className="rounded-2xl p-4 shadow hover:shadow-lg transition bg-white"
                            >
                                <img
                                    src={plant.image}
                                    alt={plant.plantName}
                                    className="w-full h-[450px] object-cover rounded-lg"
                                />
                                <h3 className="text-xl font-semibold mt-3">{plant.plantName}</h3>
                                <p className="text-green-600 font-medium">${plant.price}</p>
                                <p className="text-yellow-500">{plant.rating}</p>
                                <Link
                                    to={`/plants/${plant.plantId}`}
                                    className="mt-3 inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                                >
                                    View Details
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>
                <div className='flex justify-center items-center mt-10'>
                    <Link to='/plants' className="btn bg-gradient-to-r from-green-600 to-green-800 
                py-3 px-4 text-[16px] text-white">Show All</Link>
                </div>

                <WhyAdopt></WhyAdopt>

                <MeetExperts></MeetExperts>

            </div>
        </>
    );
};

export default Home;
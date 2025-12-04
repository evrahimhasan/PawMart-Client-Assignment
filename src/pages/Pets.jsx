import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';


const Pets = () => {
    const [plants, setPlants] = useState([]);

    useEffect(() => {
        fetch('/plants.json')
            .then(res => res.json())
            .then(data => setPlants(data));
    }, []);
    return (
        <div className="space-y-12">
            <section className="text-center">
                <h2 className="text-3xl font-bold text-green-700 mb-6">Top Rated Indoor Plants</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {plants.map((plant) => (
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





        </div>
    );
};

export default Pets;
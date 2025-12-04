import React from 'react';
import { FaHeart, FaHome, FaPaw } from 'react-icons/fa';

const WhyAdopt = () => {
    return (
        <section className="py-16 bg-[#fef9f5]">
            <div className="container mx-auto px-4 text-center">

                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Why Adopt from <span className="text-orange-600">PawMart?</span>
                </h2>

                <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                    At PawMart, we believe every pet deserves a loving home.
                    Adoption not only saves a life but also encourages compassion and responsible pet ownership.
                </p>

                <div className="grid md:grid-cols-3 gap-10">

                    <div className="bg-white shadow-lg p-6 rounded-xl hover:-translate-y-2 transition">
                        <FaHeart className="text-4xl text-red-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Give Them a Second Chance</h3>
                        <p className="text-gray-600">
                            Thousands of pets are waiting for a family.
                            Adoption gives them hope and a fresh start.
                        </p>
                    </div>

                    <div className="bg-white shadow-lg p-6 rounded-xl hover:-translate-y-2 transition">
                        <FaHome className="text-4xl text-yellow-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Safe & Loving Homes</h3>
                        <p className="text-gray-600">
                            PawMart ensures pets are adopted into safe, caring,
                            and responsible homes.
                        </p>
                    </div>

                    <div className="bg-white shadow-lg p-6 rounded-xl hover:-translate-y-2 transition">
                        <FaPaw className="text-4xl text-orange-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Responsible Pet Ownership</h3>
                        <p className="text-gray-600">
                            Adopting teaches compassion and builds
                            a stronger bond between humans and pets.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyAdopt;
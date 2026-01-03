import React from 'react';
import { FaCommentDots, FaHandshake, FaHome, FaSearch } from 'react-icons/fa';

const HowItWorks = () => {
    const steps = [
        {
            icon: <FaSearch className="text-5xl text-orange-600" />,
            title: "Browse Pets & Supplies",
            desc: "Explore thousands of listings from trusted sellers and adopters."
        },
        {
            icon: <FaCommentDots className="text-5xl text-yellow-600" />,
            title: "Contact Seller",
            desc: "Message the seller directly to ask questions and get details."
        },
        {
            icon: <FaHandshake className="text-5xl text-blue-600" />,
            title: "Meet & Decide",
            desc: "Arrange a safe meet-up to see if it's the perfect match."
        },
        {
            icon: <FaHome className="text-5xl text-green-600" />,
            title: "Bring Home Happiness",
            desc: "Welcome your new companion and start a lifelong friendship!"
        }
    ];
    return (
        <section className="py-16">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    How <span className="text-orange-600">PawMart</span> Works
                </h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
                    Simple, safe, and heartwarming — adopt or buy with confidence.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="relative p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
                            <div className="mb-6">{step.icon}</div>
                            <h3 className="text-2xl font-bold mb-3">{index + 1}. {step.title}</h3>
                            <p className="text-gray-600">{step.desc}</p>

                            {/* Arrow between steps*/}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2 text-4xl text-orange-400">
                                    →
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
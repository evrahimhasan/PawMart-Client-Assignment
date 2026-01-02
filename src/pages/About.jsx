import React from 'react';

const About = () => {
    return (
        <div>
            <section className="max-w-5xl mx-auto py-12 space-y-10">
                <h1 className="text-4xl font-bold text-center">About PawMart</h1>

                <p className="text-lg text-center text-gray-600">
                    PawMart is a community-driven pet adoption and supply platform...
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-semibold">Our Mission</h2>
                        <p>Our mission is to make pet adoption easier...</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold">Why Choose PawMart</h2>
                        <ul className="list-disc ml-5">
                            <li>Community-focused</li>
                            <li>Trusted sellers</li>
                            <li>User-friendly experience</li>
                        </ul>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;
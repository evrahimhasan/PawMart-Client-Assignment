import React from 'react';

const PetHeroes = () => {
    const heroes = [
        {
            name: "Ariana Gomes",
            img: "https://randomuser.me/api/portraits/women/65.jpg",
            quote: "Adopting Coco changed my life forever!",
            desc: "She rescued a 1-year-old abandoned dog and gave him a loving home.",
        },
        {
            name: "Mustafiz Rahman",
            img: "https://randomuser.me/api/portraits/men/31.jpg",
            quote: "Every pet deserves a second chance.",
            desc: "He is known for rescuing and caring for injured street animals.",
        },
        {
            name: "Lamia Hasan",
            img: "https://randomuser.me/api/portraits/women/44.jpg",
            quote: "Being a caregiver is pure joy.",
            desc: "She regularly cares for sick and abandoned kittens.",
        },
        {
            name: "Farhan Chowdhury",
            img: "https://randomuser.me/api/portraits/men/55.jpg",
            quote: "My adopted dog Max is now my best friend!",
            desc: "A passionate adopter and dedicated animal lover.",
        },
    ];
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 text-center">

                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Meet Our <span className="text-orange-600">Pet Heroes</span>
                </h2>

                <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                    These amazing individuals have shown love, compassion,
                    and responsibility by caring for and adopting pets in need.
                </p>

                <div className="grid md:grid-cols-4 gap-8">

                    {heroes.map((hero, index) => (
                        <div
                            key={index}
                            className="bg-[#fef9f5] p-6 rounded-xl shadow-md hover:-translate-y-2 transition"
                        >
                            <img
                                src={hero.img}
                                className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
                            />

                            <h3 className="text-lg font-bold">{hero.name}</h3>

                            <p className="italic text-orange-600 mt-1">“{hero.quote}”</p>

                            <p className="text-gray-600 text-sm mt-2">{hero.desc}</p>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default PetHeroes;
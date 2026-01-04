import React, { useEffect, useState } from 'react';
import { FaBone, FaCat, FaDog, FaStethoscope } from 'react-icons/fa';
import { Link } from 'react-router';
import Loading from '../pages/Loading';

const Categories = () => {

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://paw-mart-server-pi.vercel.app/category-counts')
            .then(res => res.json())
            .then(data => {
                setCategories(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    const icons = {
        'Pets': <FaCat className="text-6xl text-orange-600" />,
        'Foods': <FaBone className="text-6xl text-yellow-600" />,
        'Accessories': <FaDog className="text-6xl text-blue-600" />,
        'Care Products': <FaStethoscope className="text-6xl text-green-600" />
    };

    const bgGradients = {
        'Pets': 'from-orange-400 to-orange-600',
        'Foods': 'from-yellow-400 to-amber-600',
        'Accessories': 'from-blue-400 to-indigo-600',
        'Care Products': 'from-green-400 to-teal-600'
    };

    const sampleImages = {
        'Pets': 'https://i.ibb.co.com/vxLk7r0Z/1.webp',
        'Foods': 'https://i.ibb.co.com/tf3SpQ6/2.jpg',
        'Accessories': 'https://i.ibb.co.com/C5L4rKff/3.jpg',
        'Care Products': 'https://i.ibb.co.com/XZpCs97g/4.jpg'
    };

    if (loading) {
        return <div className="py-16"><Loading></Loading></div>;
    }
    return (
        <section className="py-16">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Browse by <span className="text-orange-600">Category</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
                    Explore our wide range of pets and supplies. Find exactly what you're looking for.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((cat) => (
                        <Link
                            key={cat.name}
                            to={`/pets?category=${cat.name}`}
                            className="group block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-4"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={sampleImages[cat.name]}
                                    alt={cat.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                                <div className="absolute inset-0 flex items-center justify-center">
                                    {icons[cat.name]}
                                </div>
                            </div>

                            <div className={`p-6 bg-gradient-to-r ${bgGradients[cat.name]} text-white`}>
                                <h3 className="text-2xl font-bold">{cat.name}</h3>
                                <p className="mt-2 text-lg opacity-90">
                                    {cat.count} {cat.count === 1 ? 'Listing' : 'Listings'}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
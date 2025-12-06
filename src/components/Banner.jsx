import React from "react";


const Banner = () => {

    return (
        <div className="mt-5">
            <div className="carousel w-full rounded-2xl overflow-hidden">

                {/* SLIDE 1 */}
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co.com/B583W2y1/pets.jpg"
                        className="w-full h-[380px] object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
                        <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                            Find Your Furry Friend Today!
                        </h1>
                        <p className="text-white mt-2 text-lg">
                            Adopt a loving companion and give them a forever home.
                        </p>
                    </div>

                    {/* Arrows */}
                    <div className="absolute left-5 right-5 top-1/2 flex justify-between -translate-y-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

                {/* SLIDE 2 */}
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co.com/PzgFDzR9/adopt-Pets.jpg"
                        className="w-full h-[380px] object-cover"
                    />

                    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
                        <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                            Adopt, Don’t Shop — Give a Pet a Home
                        </h1>
                        <p className="text-white mt-2 text-lg">
                            Every pet deserves love, care, and a second chance.
                        </p>
                    </div>

                    <div className="absolute left-5 right-5 top-1/2 flex justify-between -translate-y-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>

                {/* SLIDE 3 */}
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co.com/Xr9gRxpB/happy-Owners.jpg"
                        className="w-full h-[380px] object-cover"
                    />

                    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
                        <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                            Because Every Pet Deserves Love & Care
                        </h1>
                        <p className="text-white mt-2 text-lg">
                            Join thousands of happy owners who found their perfect companion.
                        </p>
                    </div>

                    <div className="absolute left-5 right-5 top-1/2 flex justify-between -translate-y-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;

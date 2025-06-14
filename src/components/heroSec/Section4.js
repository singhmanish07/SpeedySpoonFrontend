import React from 'react';
import friends from '../../assets/images/friends.png'
const HeroSection4 = () => {
    return (
        <div className="flex flex-col items-center p-6 md:flex-row md:justify-center md:p-12 mx-12 bg-gray-100 rounded-lg shadow-lg">
            <div className="flex flex-col items-center md:flex-row">
                <img src={friends} alt="Friends using mobile phones" className="w-full max-w-md md:w-[450px]" />
                <div className="mt-6 text-center md:mt-0 md:ml-6 md:text-left">
                    <h1 className="text-4xl font-bold text-secondary">
                        Ordering using<span className="text-orange-500">Speedy Spoon</span><br /> is more
                    </h1>
                    <h2 className="mt-2 text-2xl font-semibold text-gray-700">Personalised & Instant</h2>
                    <p className="mt-4">Experience the pinnacle of convenience with Speedy Spoon – your ultimate solution for lightning-fast ordering! Streamline your dining experience with our seamless platform designed to deliver unparalleled speed and efficiency. Say goodbye to waiting and hello to instant gratification with Speedy Spoon. Order smarter, dine quicker!</p>
                </div>
            </div>
        </div>
    );
};

export default HeroSection4;

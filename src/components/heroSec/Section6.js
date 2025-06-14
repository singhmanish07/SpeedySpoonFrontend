import React from 'react';
import orderfood from '../../assets/images/orderfood.png'
import order from '../../assets/images/order1.png'
import food from '../../assets/images/food.png'
const HeroSection6 = () => {
    return (
        <div className="max-w-4xl mx-auto p-4 px-12">
            <h2 className="text-xl font-bold text-orange-500 mb-4">How does SPEEDYSPOON work?</h2>
            <div className='flex justify-between items-center'>
                <div className="bg-white p-6 shadow-lg rounded-lg text-center">
                    <img src={orderfood} alt="Order Icon" className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Place an Order!</h3>
                    <p className="text-gray-600">Place order through our website or Mobile app</p>
                </div>
                <div className="bg-white p-6 shadow-lg rounded-lg text-center">
                    <img src={food} alt="Track Icon" className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Track Progress</h3>
                    <p className="text-gray-600">You can track your order status with delivery time</p>
                </div>
                <div className="bg-white p-6 shadow-lg rounded-lg text-center">
                    <img src={order} alt="Delivery Icon" className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Get your Order!</h3>
                    <p className="text-gray-600">Receive your order at a lightning fast speed!</p>
                </div>
            </div>

            <div className="text-center mt-6">
                <p className="text-gray-700">Order.UK simplifies the food ordering process. Browse through our diverse menu, select your favorite dishes, and proceed to checkout. Your delicious meal will be on its way to your doorstep in no time!</p>
            </div>
        </div>
    );
};

export default HeroSection6;

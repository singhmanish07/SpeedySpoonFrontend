import React from 'react';
import { ItemData } from '../../utils/ItemsData';

const HeroSection2 = () => {
  return (
    <div className="px-12 py-8">
    <h2 className="text-2xl font-bold mb-6">Speedy Spoon Popular Categories 🥳</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {ItemData.map((category) => (
        <div key={category.name} className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
          <img
            src={category.image}
            alt={category.name}
            className="h-40 w-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{category.name}</h3>
            <p className="text-gray-500">{category.restaurants} Restaurants</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default HeroSection2;

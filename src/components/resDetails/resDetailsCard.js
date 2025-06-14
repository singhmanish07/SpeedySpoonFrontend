import React from 'react';

const RestaurantDetailsCard = ({ resid,
  resname,
  reslocation,
  restype,
  resopentime,
  resclosetime,
  rescuisine,
  resimage, }) => {

  return (     
      <div className="w-[80%] mx-auto p-4  rounded-lg shadow-lg flex flex-col lg:flex-row py-10 relative bg-[#03081F] mt-10">
        <div className="flex-1 p-6 rounded-lg lg:rounded-r-none text-white flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold">I'm lovin' it!</h2>
            <h1 className="text-3xl font-extrabold mt-2">{resname}</h1>
          </div>
          <div className="mt-4 flex items-center">
            <div className="flex items-center bg-white  text-secondary rounded-full px-3 py-1 mr-2">
              <span className="text-sm">Minimum Order: ₹120 </span>
            </div>
            <div className="flex items-center bg-white text-secondary rounded-full px-3 py-1">
              <span className="text-sm">Delivery in 20-25 Minutes</span>
            </div>
          </div>
          <div className="flex items-center bg-white text-secondary rounded-full px-3 py-1 w-fit my-2">
            <span className="text-sm">{reslocation}</span>
          </div>
          <div className="flex items-center bg-white text-secondary rounded-full px-3 py-1 w-fit my-2">
            <span className="text-sm">{restype}</span>
          </div>
          <div className="mt-4">
            <div className="bg-orange-500 text-white rounded-full px-4 py-1 inline-block">
              Open until {resclosetime}
            </div>
          </div>
        </div>
        <div className="flex-1 lg:max-w-xs p-4 flex items-center justify-center lg:p-0 lg:pl-4">
          <img
            src={resimage}
            alt="McDonald's Food"
            className="rounded-lg"
          />
        </div>
        <div className="absolute bottom-10 right-[40%] rounded-lg p-4 shadow-xl flex items-center bg-white">
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary">3.4</div>
            <div className="text-sm text-secondary">1,360 reviews</div>
          </div>
        </div>
      </div>
  );
};

export default RestaurantDetailsCard;

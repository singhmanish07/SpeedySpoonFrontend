import React from 'react'
import Heroimg2 from '../../assets/images/Heroimg2.png'
import Heroimg1 from '../../assets/images/HeroImg1.png'
import bgimg from '../../assets/images/image1.png'
import Search from '../Search'

function HeroSection1() {
  return (
    <div className="relative py-4">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between py-12 px-6 min-h-[72vh] shadow-lg border-[1px] border-gray-200 rounded-md">
        <div className="w-full lg:w-1/3 lg:pr-12 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Feast Your Senses, <span className="text-primary">Fast and Fresh</span>
          </h1>
          <p className="mb-4">Order Restaurant food, takeaway and groceries.</p>
        </div>
        <div className="hidden lg:flex w-full lg:w-2/3 justify-center items-center relative mt-8 lg:mt-0">
          <img
            src={Heroimg1}
            alt="Eating Pizza"
            className="rounded-lg h-72 lg:h-96 absolute left-0 top-0 transform lg:-translate-x-12 lg:-translate-y-6"
          />
          <img
            src={Heroimg2}
            alt="Eating Pizza"
            className="rounded-lg shadow-lg h-60 lg:h-72 absolute left-[30%] top-1/4 transform -translate-y-12 -z-10"
          />
          <img
            src={bgimg}
            alt="Background Image"
            className="rounded-lg shadow-lg h-80 lg:h-96 w-full lg:w-auto absolute right-0 left-1/2 transform -translate-x-1/2 lg:-translate-x-1/4 -z-20"
          />

          <div className="absolute top-0 right-0 flex flex-col space-y-2 p-2 rounded-lg text-white">
            <div className="p-2 bg-white text-secondary rounded-lg shadow-md">
              <p>Order</p>
              <p className="text-sm">We've received your order!</p>
              <p className="text-xs text-gray-500">now</p>
            </div>
            <div className="p-2 bg-white text-secondary rounded-lg shadow-md">
              <p>Order</p>
              <p className="text-sm">Order accepted! Your order will be delivered shortly</p>
              <p className="text-xs text-gray-500">now</p>
            </div>
            <div className="p-2 bg-white text-secondary rounded-lg shadow-md">
              <p>Order</p>
              <p className="text-sm">Your rider's nearby! They're almost there - get ready!</p>
              <p className="text-xs text-gray-500">now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection1;

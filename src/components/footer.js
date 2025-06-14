import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-8 pb-4">
      <div className="max-w-6xl mx-auto px-4 lg:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-center lg:items-start">
          <h2 className="text-3xl font-bold text-black mb-4">SPEEDY <span className='text-orange-500'>SPOON</span></h2>
          <p className="text-gray-600 text-center lg:text-left">
            Company # 408903-445, Registered with House of companies.
          </p>
        </div>

        <div className="flex flex-col items-center lg:items-start">
          <h3 className="font-semibold mb-2">Get Exclusive Deals in your Inbox</h3>
          <form className="flex w-full max-w-sm">
            <input
              type="email"
              placeholder="youremail@gmail.com"
              className="p-2 rounded-l-md border border-gray-300 flex-grow"
            />
            <button
              type="submit"
              className="bg-orange-500 text-white p-2 rounded-r-md"
            >
              Subscribe
            </button>
          </form>
          <p className="text-gray-500 mt-2 text-center lg:text-left">
            We won't spam; read our <Link href="#!" className="underline">email policy</Link>.
          </p>
        </div>

        <div className="flex flex-col items-center lg:items-start">
          <h3 className="font-semibold mb-2">Legal Pages</h3>
          <ul className="space-y-1">
            <li><Link href="#!" className="text-gray-700">Terms and conditions</Link></li>
            <li><Link href="#!" className="text-gray-700">Privacy</Link></li>
            <li><Link href="#!" className="text-gray-700">Cookies</Link></li>
            <li><Link href="#!" className="text-gray-700">Modern Slavery Statement</Link></li>
          </ul>
        </div>

        <div className="flex flex-col items-center lg:items-start">
          <h3 className="font-semibold mb-2">Important Links</h3>
          <ul className="space-y-1">
            <li><Link href="#!" className="text-gray-700">Get help</Link></li>
            <li><Link href="#!" className="text-gray-700">Add your restaurant</Link></li>
            <li><Link href="#!" className="text-gray-700">Sign up to deliver</Link></li>
            <li><Link href="#!" className="text-gray-700">Create a business account</Link></li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-900 text-gray-400 text-center py-4 mt-8">
        <div className="max-w-6xl mx-auto px-4 lg:px-0 flex flex-col lg:flex-row justify-between items-center">
          <p className="text-sm">
            SPEEDY<span className='bg-orange-500'>SPOON</span> Copyright 2025, All Rights Reserved.
          </p>
          <ul className="flex space-x-4 mt-2 lg:mt-0">
            <li><Link href="#!" className="text-gray-400">Privacy Policy</Link></li>
            <li><Link href="#!" className="text-gray-400">Terms</Link></li>
            <li><Link href="#!" className="text-gray-400">Pricing</Link></li>
            <li><Link href="#!" className="text-gray-400">Do not sell or share my personal information</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

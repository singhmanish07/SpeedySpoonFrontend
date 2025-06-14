import React from 'react'
import Partner from '../../assets/images/Partner.png'
import Rider from '../../assets/images/Ride.png'
import User from '../../assets/images/User.png'
import { Link } from 'react-router-dom'


function HeroSection5() {
    return (
        <div className='flex flex-col md:flex-row justify-center space-x-10 items-center m-10'>
            <div className='relative'>
                <img src={Partner} alt="Partner" className='h-[21rem]' />
                <div>
                    <p className='bg-white absolute top-0 left-[8%] font-semibold text-secondary p-2 rounded-md'>Earn more with lower fees</p>
                    <Link to={'/distributor/register'} className='text-primary absolute bottom-[40%] left-6'>Sign up as a business</Link>
                    <p className='text-2xl font-bold text-white absolute bottom-[26%] left-6'>Partner With us</p>
                    <Link to={'/'} className='bg-primary text-white px-8 py-2 font-semibold rounded-2xl absolute bottom-[6%] left-6'>Get Started</Link>
                </div>
            </div>
            <div className='relative'>
                <img src={User} alt="User" className='relative h-[21rem] bg-secondary rounded-xl w-full' />
                <div>
                    <p className='bg-white absolute top-0 right-[8%] font-semibold text-secondary p-2 rounded-md'>Avail exclusive perks</p>
                    <Link to={'user/signup'} className='text-primary absolute bottom-[40%] left-6'>Sign up as a Consumer</Link>
                    <p  className='text-2xl font-bold text-white absolute bottom-[26%] left-6'>Try the Delicious</p>
                    <Link to={'/'} className='bg-primary text-white px-8 py-2 font-semibold rounded-2xl absolute bottom-[6%] left-6'>Get Started</Link>
                </div>
            </div>
        </div>
    )
}

export default HeroSection5

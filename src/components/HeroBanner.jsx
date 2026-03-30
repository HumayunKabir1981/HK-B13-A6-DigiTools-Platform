import React from 'react';
import heroBanner from '../assets/products/banner.png'
import dotIcon from '../assets/products/Group 5.png'
import { FaBell } from 'react-icons/fa';

const HeroBanner = () => {
    return (
        <div className='flex justify-between w-full md:w-4/5  mx-auto'>

            <div>

                <div className='flex flex-row items-center gap-2 bg-blue-100 text-purple-500 text-xs font-medium px-2.5 py-0.5 rounded-full'>
                    <img src={dotIcon} alt="" />
                    <span >    New: AI-Powered Tools Available </span>
                </div>

                <h1 className=' text-6xl font-extrabold mt-5'>Supercharge Your Digital Workflow</h1>

            </div>
            <div>
                <img src={heroBanner} alt="" className='max-w-125 max-h-150' />
            </div>

        </div>
    );
};

export default HeroBanner;
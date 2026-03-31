import React from 'react';
import heroBanner from '../assets/products/banner.png'
import dotIcon from '../assets/products/Group 5.png'
import { CiPlay1 } from "react-icons/ci";

const HeroBanner = () => {
    return (
        <div className='flex justify-between w-full md:w-4/5  mx-auto'>

            <div>

                <div className='flex flex-row items-center gap-2 bg-blue-100 text-purple-500 text-xs font-medium px-2.5 py-0.5 rounded-full'>
                    <img src={dotIcon} alt="" />
                    <span >    New: AI-Powered Tools Available </span>
                </div>

                <h1 className=' text-6xl font-extrabold my-5'>Supercharge Your Digital Workflow</h1>
                <p>Access premium AI tools, design assets, templates, and productivity
                    software—all in one place. Start creating faster today.
                    Explore Products
                </p>
                <div className='flex gap-3 pt-5'>
                    <button className="px-6 py-2 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold rounded-full shadow-lg">Explore Products</button>
                    <button className='btn btn-outline btn-primary rounded-full'> <CiPlay1 /> Watch Demo</button>
                </div>
            </div>
            <div>
                <img src={heroBanner} alt="" className='max-w-125 max-h-150' />
            </div>

        </div>
    );
};

export default HeroBanner;


import user from '../assets/products/user.png'
import pkg from '../assets/products/package.png'
import rocket from '../assets/products/rocket.png'

const GetStarted = () => {
    return (
        <div className=' w-full md:w-4/5  mx-auto  '>


            <div className="flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold">Get Started in 3 Steps</h1>
                <p className="text-center py-2">Start using premium digital tools in minutes, not hours. </p>

            </div>




            <div className='flex flex-col md:flex-row justify-between gap-16 mt-5'>



                <div className='relative flex flex-col gap-20'>
                    <div>
                        <button className="absolute right-0 top-0 px-3 py-2 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold rounded-full shadow-lg">01</button>
                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <img src={user} alt="" />
                        <h1 className="text-xl font-bold"> Creat Account </h1>
                        <p className="text-center py-3"> Sign up for free in seconds. No credit card required to get started. </p>

                    </div>
                </div>

                <div className='relative flex flex-col gap-20'>
                    <div>
                        <button className="absolute right-0 px-3 py-2 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold rounded-full shadow-lg">02</button>
                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <img src={pkg} alt="" />
                        <h1 className="text-xl font-bold"> Choose Products </h1>
                        <p className="text-center py-3"> Browse our catalog and select the tools
                            that fit your needs. </p>
                    </div>

                </div>

                <div className='relative flex flex-col gap-20'>
                    <div>
                        <button className="absolute right-0 px-3 py-2 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold rounded-full shadow-lg">03</button>
                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <img src={rocket} alt="" />
                        <h1 className="text-xl font-bold"> Start Creating </h1>
                        <p className="text-center py-3"> Download and start using your premium
                            tools immediately. </p>

                    </div>
                </div>                

            </div>


        </div>
    );
};

export default GetStarted;
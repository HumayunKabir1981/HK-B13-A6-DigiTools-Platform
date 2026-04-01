import React from 'react';

const Card = ({data}) => {

    console.log(data);
    

    return (
        <div>

             <div className="card w-96 bg-base-100 shadow-sm flex-1">
                    <div className="card-body relative">

                        <div >
                            <h2 className="text-3xl font-bold">Starter</h2>
                            <p className="mb-5">Perfect for getting started</p>
                            <span ><span className="text-2xl font-bold">$0</span>/month</span>
                        </div>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Access to 10 free tools</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span> Basic templates </span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span> Community support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span> 1 project per month </span>
                            </li>


                        </ul>
                        <div className=" absolute bottom-5 w-4/5">

                            <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA]  text-white font-bold btn-block rounded-full">Buy Now</button>
                        </div>
                    </div>
                </div>
            
        </div>
    );
};

export default Card;
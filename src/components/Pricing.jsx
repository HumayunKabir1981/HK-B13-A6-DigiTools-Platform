

const Pricing = () => {
    return (
        <div className=' w-full md:w-4/5  mx-auto  '>


            <div className="flex flex-col justify-center items-center">
                <h1 className="text-2xl font-bold">Simple, Transparent Pricing</h1>
                <p className="text-center py-2">Choose the plan that fits your needs. Upgrade or downgrade anytime. </p>

            </div>

            <div className='flex justify-between items-stretch gap-5 mt-5'>




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

                            <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA]  text-white font-bold btn-block rounded-full">Get Started Free</button>
                        </div>
                    </div>
                </div>




                <div className="card w-96 bg-base-100 shadow-sm flex-1">
                    <div className="card-body relative rounded-xl bg-gradient-to-r from-[#4F39F6] to-[#9514FA]  text-white font-bold">
                        <span className="badge badge-xs badge-warning absolute top-[-5px] left-1/2 -translate-x-1/2">Most Popular</span>
                        <div >
                            <h2 className="text-3xl font-bold">Pro</h2>
                            <p className="mb-5">Best for professionals</p>
                            <span ><span className="text-2xl font-bold">$29</span>/month</span>
                        </div>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span> Access to all premium tools</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span> Unlimited templates </span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span> Priority support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span> Unlimited projects </span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span> Cloud sync</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span> Advanced analytics </span>
                            </li>


                        </ul>
                        <div className="mt-6">

                            <button className="btn   text-purple-600 font-bold btn-block rounded-full">Get Started Free</button>
                        </div>
                    </div>
                </div>





                <div className="card w-96 bg-base-100 shadow-sm flex-1">
                    <div className="card-body">

                        <div >
                            <h2 className="text-3xl font-bold">Enterprise</h2>
                            <p className="mb-5">For teams and businesses </p>
                            <span ><span className="text-2xl font-bold">$99</span>/month</span>
                        </div>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Everything in Pro</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span> Team collaboration </span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span> Custom integrations</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span> Dedicated support </span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span> SLA guarantee </span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span> Custom branding </span>
                            </li>


                        </ul>
                        <div className="mt-6">

                            <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA]  text-white font-bold btn-block rounded-full">Contact Sales</button>
                        </div>
                    </div>
                </div>





            </div>






        </div>
    );
};

export default Pricing;
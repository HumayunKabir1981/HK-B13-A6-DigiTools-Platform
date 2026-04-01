import { use } from "react";
import Card from "./Card";

const CardItems = ({ cardPromis }) => {

    const data = use(cardPromis)



    return (
        <div className=' w-full md:w-4/5  mx-auto  '>


            <div className="flex flex-col justify-center items-center">
                <h1 className="text-2xl font-bold">Premium Digital Tools</h1>
                <p className="text-center py-3">Choose from our curated collection of premium digital products designed <br />
                    to boost your productivity and creativity. </p>

            </div>

            <div className="flex  justify-center items-center gap-3">
                <button className="px-6 py-2 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold rounded-full shadow-lg">Products</button>
                <span>Cart(2)</span>
            </div>




            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6">

                {
                    data.map(card => {

                        return (

                            <div className="card w-96 bg-base-100 shadow-sm">
                                <div className="card-body">

                                    <div className="relative w-full h-16">
                                        <span className="badge badge-xs badge-warning absolute top-0 right-0">{card.tag}</span>
                                        <span className="absolute left-0 top-6">{card.icon}</span>
                                    </div>

                                    <div >
                                        <h2 className="text-3xl font-bold">{card.name}</h2>
                                        <p className="mb-5">{card.description}</p>
                                        <span ><span className="text-2xl font-bold">${card.price}</span>/month</span>
                                    </div>

                                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                            <span>{card.features[0]}</span>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                            <span>{card.features[1]}</span>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                            <span>{card.features[2]}</span>
                                        </li>

                                    </ul>
                                      <div className="mt-6">

                                        <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA]  text-white font-bold btn-block rounded-full">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>



        </div>
    );
};

export default CardItems;
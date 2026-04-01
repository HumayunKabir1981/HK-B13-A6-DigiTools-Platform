const Banner = () => {
    return (
        <div className='  w-full  bg-gradient-to-r from-[#4F39F6] to-[#9514FA]  mx-auto'>

            <div className="flex flex-col md:flex-row  items-center justify-center gap-x-16 ">
                <div className="flex flex-col items-center gap-1 p-5">
                    <h1 className="text-4xl text-white font-extrabold">50K+</h1>
                    <p className=" text-white text-xl">Active Users</p>
                </div>

                <div className="w-[1px] h-10 bg-black mx-2"></div>

                <div className="flex flex-col items-center gap-1 p-5">
                    <h1 className="text-4xl text-white font-extrabold">200+</h1>
                    <p className=" text-white text-xl">Premium Tools</p>
                </div>

                <div className="w-[1px] h-5 bg-black mx-2"></div>

                 <div className="flex flex-col items-center gap-1 p-5">
                    <h1 className="text-4xl text-white font-extrabold">4.9</h1>
                    <p className=" text-white text-xl">Rating</p>
                </div>
            </div>

        </div>
    );
};

export default Banner;
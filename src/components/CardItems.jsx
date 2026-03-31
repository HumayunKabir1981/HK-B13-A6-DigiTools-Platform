const CardItems = () => {
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

         
<div>Show Cart</div>



        </div>
    );
};

export default CardItems;
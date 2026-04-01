import { use, useState } from "react";
import Card from "./Card";
import { IoCartOutline } from "react-icons/io5";

const CardItems = ({ cardPromis, cart, handleAddToCart, handleRemove, handleCheckout }) => {
    const data = use(cardPromis);

    const [view, setView] = useState("products"); // 🔥 toggle

    // total price
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="w-full md:w-4/5 mx-auto">

            {/* Buttons */}
            <div className="flex justify-center gap-3 my-5">
                <button
                    onClick={() => setView("products")}
                    className={`btn rounded-full px-6 py-2 ${view === "products"
                        ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full"
                        : "btn-outline"
                        }`}
                >
                    Products
                </button>

                <button
                    onClick={() => setView("cart")}
                    className={`btn rounded-full ${view === "cart"
                        ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full"
                        : "btn-outline"
                        }`}
                >
                    Cart({cart.length})
                </button>
            </div>



            {view === "products" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {data.map((card) => (
                        <Card
                            key={card.id}
                            card={card}
                            handleAddToCart={() => handleAddToCart(card)}
                        />
                    ))}
                </div>
            )}




            {view === "cart" && (
                <div className="p-4 border rounded-lg">

                    <h1 className="text-2xl font-bold">Your Card</h1>

                    {cart.length === 0 && (
                        <div className="flex flex-col justify-center items-center h-40 text-gray-500">

                            <IoCartOutline className="text-9xl mb-3" />

                            <p className="text-4xl font-medium pb-10">
                                Your Cart is Empty
                            </p>

                        </div>
                    )}

                    {cart.map((item) => (
                        <div key={item.id} className="flex justify-between items-center rounded-xl shadow py-2">

                            <div className="flex gap-5">
                                <span>{item.icon}</span>
                                <div className="flex flex-col">
                                    <span>{item.name}</span>
                                    <span>${item.price}</span>
                                </div>
                            </div>


                            <button
                                onClick={() => handleRemove(item.id)}
                                className=" btn text-red-400 font-bold "
                            >
                                Remove
                            </button>
                        </div>
                    ))}

                    {/* Total */}



                    {cart.length > 0 && (
                        <div className=" flex justify-between mt-4 font-bold text-lg">
                            <h1>Total</h1>
                            <span>${total}</span>

                        </div>
                    )}


                    {cart.length > 0 && (
                        <button
                            onClick={handleCheckout}
                            className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold btn-block rounded-full mt-4"
                        >
                            Checkout
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default CardItems;
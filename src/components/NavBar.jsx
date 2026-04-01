import React from 'react';
import { BsCart } from "react-icons/bs";

const NavBar = ({ cartCount }) => {
    return (
        <div className="w-full md:w-4/5 mx-auto">
            <div className="navbar bg-base-100 shadow-sm">

               
                <div className="navbar-start">

                    {/* Mobile menu */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            ☰
                        </div>

                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Products</a></li>
                            <li><a>Features</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Testimonials</a></li>
                            <li><a>FAQ</a></li>
                        </ul>
                    </div>

                  
                    <h2 className="text-2xl md:text-4xl font-bold text-[#4F39F6]">
                        DigiTools
                    </h2>
                </div>

                
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>

          
                <div className="navbar-end flex items-center gap-3">

                
                    <div className="relative inline-block">
                        <BsCart className="text-xl md:text-2xl" />

                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                            {cartCount}
                        </span>
                    </div>

           
                    <ul className="hidden md:flex menu menu-horizontal items-center">
                        <li><a>Login</a></li>
                        <li>
                            <button className="px-4 md:px-6 py-2 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold rounded-full shadow-lg">
                                Get Started
                            </button>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default NavBar;
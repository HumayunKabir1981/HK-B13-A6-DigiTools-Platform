import React from 'react';
import { BsCart } from "react-icons/bs";

const NavBar = ({cartCount }) => {
    return (
        <div className="w-full md:w-4/5  mx-auto">
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    
                    <h2 className=" text-4xl font-bold text-[#4F39F6]">  DigiTools</h2>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 list-style: none">
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>

                    </ul>
                </div>
                <div className="navbar-end">
                      <span>  <BsCart /></span>
                      <span> {cartCount} </span>
                    <ul className=" list-style: none menu menu-horizontal items-center">
                    
                        <li><a>Login</a></li>
                        <li> <button className="px-6 py-2 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold rounded-full shadow-lg">
  Get Started
</button> </li>
                    </ul>

                </div>
            </div>

     
        </div>
    );
};

export default NavBar;
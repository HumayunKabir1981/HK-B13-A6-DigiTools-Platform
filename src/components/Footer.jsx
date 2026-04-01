import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="w-full bg-black">

            <div className=' w-full md:w-4/5  mx-auto  '>

                <div className=' text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 py-16'>


                    <div className="col-span-2">
                        <h2 className="text-4xl  font-bold mb-3">Digitools</h2>
                        <p>
                            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
                        </p>
                    </div>

                    <div className="flex flex-col gap-5">
                        <h2 className="text-2xl">Product</h2>
                        <h4>Features</h4>
                        <h4>Pricing</h4>
                        <h4>Templates</h4>
                        <h4>Integrations</h4>
                    </div>

                    <div className="flex flex-col gap-5">
                        <h2 className="text-2xl">Company</h2>
                        <h4>About</h4>
                        <h4>Blog</h4>
                        <h4>Careers</h4>
                        <h4>Press</h4>
                    </div>

                    <div className="flex flex-col gap-5">
                        <h2 className="text-2xl">Resources</h2>
                        <h4>Documentation</h4>
                        <h4>Help Center</h4>
                        <h4>Community</h4>
                        <h4>Contact</h4>
                    </div>

                    <div className="flex flex-col gap-5">
                        <h2 className="text-2xl">Social Links</h2>
                       
                        <div className="flex gap-3">

                            <div className="rounded-full bg-white h-10 w-10 flex justify-center items-center">
                                <IoLogoInstagram className="text-xl text-black"/>
                            </div>
                            <div className="rounded-full bg-white h-10 w-10 flex justify-center items-center">
                                 <FaFacebookSquare className="text-xl text-black" />
                            </div>
                            <div className="rounded-full bg-white h-10 w-10 flex justify-center items-center">
                                 <FaXTwitter className="text-xl text-black" />
                            </div>                     
                                                       
                        </div>

                    </div>

                </div>

                <div className="h-[1px] bg-gray-500 my-4"></div>
                <div className="text-white flex flex-col md:flex-row justify-between py-5">

                    <h1 >© 2026 Digitools. All rights reserved.</h1>
                    
                   
                    <div className="flex gap-5">
                        <h4>Privacy Policy </h4>
                        <h4>Terms of Service   </h4>
                        <h4>Cookies </h4>
                    </div>
                </div>


            </div>







        </div>
    );
};

export default Footer;
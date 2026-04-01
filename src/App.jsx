import { Suspense, useState, useMemo } from 'react';
import './App.css'
import Banner from './components/Banner'
import CardItems from './components/CardItems'
import Footer from './components/Footer'
import GetStarted from './components/GetStarted'
import HeroBanner from './components/HeroBanner'
import NavBar from './components/NavBar'
import Pricing from './components/Pricing'
import WorkFlow from './components/WorkFlow'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const fetchCard = async () => {
  const res = await fetch("/data/products.json");
  return res.json();
}

function App() {


  const cardPromis = useMemo(() => fetchCard(), []);

  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
    toast.success(`${product.name} added to cart 🛒`);
  };


  const handleRemove = (id) => {
    const item = cart.find((i) => i.id === id);

    setCart((prev) => prev.filter((i) => i.id !== id));

    toast.error(`${item.name} removed ❌`);
  };


  const handleCheckout = () => {
    setCart([]);

    toast.success("Checkout successful 🎉");
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />

      <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
        <NavBar cartCount={cart.length} />
      </div>

      <div className='mt-24 mb-5'>
        <HeroBanner />
      </div>

      <Banner />

      <div className='my-10'>
        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <CardItems
            cardPromis={cardPromis}
            cart={cart}
            handleAddToCart={handleAddToCart}
            handleRemove={handleRemove}
            handleCheckout={handleCheckout}
          />
        </Suspense>
      </div>

      <div className='my-24'><GetStarted /></div>



      <div className='my-16'>
        <Pricing />
      </div>

      <WorkFlow />
      <Footer />
    </>
  )
}

export default App
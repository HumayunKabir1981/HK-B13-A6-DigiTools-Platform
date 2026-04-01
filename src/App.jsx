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

const fetchCard = async () => {
  const res = await fetch("/data/products.json");
  return res.json();
}

function App() {

  const cardPromis = useMemo(() => fetchCard(), []);

 
  const [cart, setCart] = useState([]);

 
  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  
  const handleRemove = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  
  const handleCheckout = () => {
    setCart([]);
  };

  return (
    <>


      <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
        <NavBar cartCount={cart.length} />
      </div>

      <div className='mt-24 mb-5'>
        <HeroBanner />
      </div>

      <Banner />

      <div className='mt-10'>
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

      <GetStarted />

      <div className='my-16'>
        <Pricing />
      </div>

      <WorkFlow />
      <Footer />
    </>
  )
}

export default App
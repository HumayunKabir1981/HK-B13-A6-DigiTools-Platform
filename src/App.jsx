
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

  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <>
      <NavBar cartCount={cartCount}></NavBar>

      <div className='mt-24 mb-5'>
        <HeroBanner></HeroBanner>
      </div>
      <Banner></Banner>
      <div className='mt-10'>

        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <CardItems cardPromis={cardPromis} 
        handleAddToCart={handleAddToCart}
        cartCount={cartCount}></CardItems>
        </Suspense>

      </div>
      <GetStarted></GetStarted>

      <div className='my-16'>
        <Pricing></Pricing>
      </div>
      <WorkFlow></WorkFlow>
      <Footer></Footer>

    </>
  )
}

export default App

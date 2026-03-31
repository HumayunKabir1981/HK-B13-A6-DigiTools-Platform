
import './App.css'
import Banner from './components/Banner'
import CardItems from './components/CardItems'
import Footer from './components/Footer'
import GetStarted from './components/GetStarted'

import HeroBanner from './components/HeroBanner'
import NavBar from './components/NavBar'
import Pricing from './components/Pricing'
import WorkFlow from './components/WorkFlow'

function App() {


  return (
    <>
      <NavBar></NavBar>

      <div className='mt-24 mb-5'>
        <HeroBanner></HeroBanner>
      </div>
      <Banner></Banner>
      <div className='mt-10'>
        <CardItems></CardItems>
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

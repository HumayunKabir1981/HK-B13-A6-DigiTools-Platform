
import './App.css'
import Banner from './components/Banner'
import HeroBanner from './components/HeroBanner'
import NavBar from './components/NavBar'

function App() {


  return (
    <>
      <NavBar></NavBar>

      <div className='my-5'>
        <HeroBanner></HeroBanner>
      </div>
      <Banner></Banner>

    </>
  )
}

export default App

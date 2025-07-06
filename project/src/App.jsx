import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Home from './pages/Home';
import Amenities from './pages/Amenities';
import Gallery from './pages/Gallery';
import LocationMap from './pages/LocationMap';
import Price from './pages/Price';
import Plans from './pages/Plans';
import 'swiper/css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReadMore from './components/ReadMore';
import GetInTouch from './components/GetInTouch';
import OurProducts from './components/OurProducts';




function App() {

  return (
    <div className='font-supera'>
      <Router>
      <ToastContainer position="top-right" autoClose={3000} />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/amenities' element={<Amenities />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/locationMap' element={<LocationMap/>} />
            <Route path='/price' element={<Price/>} />
            <Route path='/plan' element={<Plans/>} />
          </Route>
        </Routes>
      </Router>
    </div>
  )

}

export default App

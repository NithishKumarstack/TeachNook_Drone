import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './components/intro/Intro';
import Banner from './components/banner/Banner';
import Navbar from './components/NavBar/Navbar';
import Next from './components/Next/Next.jsx';
const App = () => {
  return (
    <>
    <Banner/>
    <Navbar/>
    <Intro/>
    <Next/>
    </>
  )
}

export default App;
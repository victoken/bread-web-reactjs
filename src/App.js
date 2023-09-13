import React from 'react';
import './App.css';
import Header from './components/Headers';
import Start from './components/Start';
import Works from './components/Works';
import About from './components/About';
// import Cartpage from './pages/CartPage'; 
import ScrollToTop from "react-scroll-to-top";



function App() {
  return (
    <div>
      <ScrollToTop />
      <Header />


      <Start />
      <Works />
      <About />
     
    </div>
  );
}

export default App;

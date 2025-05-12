


import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";




// Import your page components
import Home from "./pages/home";
import About from "./pages/about";
import Products from "./pages/product";
import Contact from "./pages/contact";
import ReadMore from './components/about/readmore';

// Import your shared components
import Navbar from "./components/nabar";
import Footer from "./components/footer";
import Copy from "./components/copyright";
import "./App.css";

function App() {
  
  return (
    
    
    <Router>
      <div className="App">
        <Navbar /> 

        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/readmore' element={<ReadMore/>}/>
        </Routes>
        <Footer />
        <Copy />
      </div>
    </Router>
  );
}

export default App;
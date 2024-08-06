import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./demo/Home";
import About from "./demo/About";
import ContactUs from "./demo/ContactUs";
import Dummy from "./demo/Dummy";
import Service from "./demo/Service";
import Sample from "./demo/Sample";
import Recruitment from "./demo/Recruitment";



import Navbaar from "./demo/Navbaar";
// import "./assets/CSS/Service.css"


import Footer from "./demo/Footer";

function App() {
  return (
    <div className="Cursor">
      <Router>
        <Navbaar/>
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
       
          <Route path="/dummy" element={<Dummy />} />
          <Route path="/service"element={<Service />} />
          <Route path="/sample" element={<Sample />} />
          <Route path="/recruitment" element={<Recruitment />} />
        </Routes>
        <Footer/>

      </Router>
    </div>
  );
} 

export default App;




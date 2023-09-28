import "./App.css";
import About from "./pages/about";
import Home from "./pages/home";
import React from 'react';
import Services from "./pages/services";
import Contactus from "./pages/contactus";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="About" element={ <About/> } />
        <Route path="Services" element={ <Services/> } />
        <Route path="Contactus" element={ <Contactus/> } />
      </Routes>
    </div>
  );
}

export default App;

import React from 'react'
import {BrowserRouter as  Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home"
import PokieDetails from "./pages/pokieDetails/PokieDetails";
import AboutPokie from './components/aboutPokie/AboutPokie';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/PokieDetails/:name" element={<PokieDetails/>}/>
        {/* <Route exact path="/PokieDetails" element={<AboutPokie/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;

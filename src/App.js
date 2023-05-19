import React from 'react'
import {BrowserRouter as  Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home"
import PokieDetails from "./pages/pokieDetails/PokieDetails";
import AboutPokie from './components/aboutPokie/AboutPokie';
import Header from "./components/header/Header";
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/PokieDetails/:name" element={<PokieDetails/>}/>
        {/* <Route exact path="/PokieDetails" element={<AboutPokie/>}/> */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

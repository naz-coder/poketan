import React from 'react'
import {BrowserRouter as  Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home"
import PokieDetails from "./pages/pokieDetails/PokieDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/pokieDetails:name" element={<PokieDetails/>}/>
      </Routes>
    </Router>
  );
}

export default App;

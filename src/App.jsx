import { BrowserRouter, Route, Routes } from "react-router-dom";

import FinalShop from './components/FinalShop';
import Home from './components/Home';
import React from 'react'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* DEFAULT ROUTE */}
        <Route path="/" element={<Home />} />

        {/* FINAL SHOP PAGE */}
        <Route path="/finalshop" element={<FinalShop />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App

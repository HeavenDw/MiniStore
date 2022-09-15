import { Routes, Route } from 'react-router-dom';

import Navigation from './Components/Navigation/Navigation';
import About from './Pages/About';
import Home from './Pages/Home';
import React, { FC } from 'react';
import SingleProductPage from './Pages/SingleProductPage';

const App: FC = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<SingleProductPage />} />
      </Routes>
    </>
  );
};

export default App;

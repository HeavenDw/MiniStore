import { Routes, Route } from 'react-router-dom';
import FullProduct from './Pages/FullProduct';

import Navigation from './Components/Navigation/Navigation';
import About from './Pages/About';
import Home from './Pages/Home';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<FullProduct />} />
      </Routes>
    </>
  );
}

export default App;
